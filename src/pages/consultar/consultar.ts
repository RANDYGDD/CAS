import { HuellasProvider } from './../../providers/huellas/huellas';
import { PersonaPage } from './../persona/persona';
import { ConsultalProvider } from './../../providers/consultal/consultal';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Toast } from '@ionic-native/toast';
import { BarcodeScanner,BarcodeScannerOptions } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-consultar',
  templateUrl: 'consultar.html',
})
export class ConsultarPage {

  public cedula:string="";
  public perfil:any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public toast: Toast,
              public _perfiles:ConsultalProvider,
              private barcodeScanner: BarcodeScanner,
              public _huellas:HuellasProvider
                
            ) {
  }


  leer(){

  
    this.barcodeScanner.scan().then(barcodeData => {
            this.cedula=barcodeData.text;
     }).catch(err => {
         console.log('Error', err);
     });

  }


  huella(){

    this._huellas.LeerHuella()
    .then((result: any) => {
 
        this.consultar_perfil();
           
   }).catch((error: any) =>{
           return false;
   });
 
   }

  consultar_perfil(){

    if(this.cedula.length != 11){

         this._perfiles.Ivalidos();

    }else{

      this._perfiles.ConsultarPerfil(this.cedula).subscribe(

        (data:any)=>{
          
            if(data.data.message){
                
                 this._perfiles.Mensaje(data.data.message);

            }else{
              this.navCtrl.push(PersonaPage,{'perfil':data}); 
            }

         
        },

        (error)=>{

        }
)

    }


  }


}
