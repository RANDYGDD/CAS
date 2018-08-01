import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { ConsultalProvider } from '../../providers/consultal/consultal';



@Component({
  selector: 'page-placa',
  templateUrl: 'placa.html',
})
export class PlacaPage {

   vehiculo:any="";
   propietario:any={};
   placa:any;
   anterior:any;
   accidente:any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public _placa:ConsultalProvider,
              public alertCtrl:AlertController,
            ) {

               this.placa= this.navParams.get('placa');
            
              
           
  }


  ionViewDidLoad(){

    this._placa.ConsultarPlaca(this.placa).subscribe(
                
      (data:any)=>{

          
         
          if(data.data.message){

            this._placa.Mensaje(data.data.message)

            this.navCtrl.pop();

          }else{
            this.vehiculo=data.data.vehicle;
            this.propietario=data.data.vehicle.person;
            this.anterior=data.data.propietario_anterior;
            
            this.accidente=this.propietario=data.data.vehicle.vehicle_accidents.length;


          }
          
      },


      (error)=>{

      }

  )
       
  }







}
