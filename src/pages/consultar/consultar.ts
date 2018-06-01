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

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public toast: Toast,
              public _perfiles:ConsultalProvider,
              private barcodeScanner: BarcodeScanner
                
            ) {
  }


  leer(){

  
    this.barcodeScanner.scan().then(barcodeData => {
            this.cedula=barcodeData.text;
     }).catch(err => {
         console.log('Error', err);
     });

  }

  consultar_perfil(){

  }


}
