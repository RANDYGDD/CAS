import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { ConsultalProvider } from '../../providers/consultal/consultal';



@Component({
  selector: 'page-placa',
  templateUrl: 'placa.html',
})
export class PlacaPage {

   vehiculo:any="";
  public  propietario:any={};
   placa:any;
   anterior:any;
   accidente:any;

   cedula:any;
   nombres:any;
   apellidos:any;
   nacimiento:any;
   nacionalidad:any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public _placa:ConsultalProvider,
              public alertCtrl:AlertController,
              public loadingCtrl:LoadingController
            ) {

               this.placa= this.navParams.get('placa');
            
              
           
  }


  ionViewDidLoad(){
    let loading = this.loadingCtrl.create({
      content: 'Cargando....'
    });

    loading.present();

    this._placa.ConsultarPlaca(this.placa).subscribe(
                
      (data:any)=>{
         
          if(data.data.message){
             
             loading.dismiss();

            this._placa.Mensaje(data.data.message)

            this.navCtrl.pop();

          }else{
            this.vehiculo=data.data.vehicle;
            this.propietario=data.data.vehicle.person;
            this.anterior=data.data.propietario_anterior;

            console.log(this.propietario);

            this.cedula=this.propietario.cedula;
            this.nombres=this.propietario.nombres;
            this.apellidos=this.propietario.apellidos;
            this.nacimiento=this.propietario.fecha_nac;
            this.nacionalidad=this.propietario.nacionalidad;
            
            this.accidente=this.propietario=data.data.vehicle.vehicle_accidents.length;

            loading.dismiss();

          }
          
      },


      (error)=>{

        loading.dismiss();

      }

  )
       
  }







}
