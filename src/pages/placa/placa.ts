import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ConsultalProvider } from '../../providers/consultal/consultal';


@Component({
  selector: 'page-placa',
  templateUrl: 'placa.html',
})
export class PlacaPage {

   vehiculo:any="";
   placa:any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public _placa:ConsultalProvider
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
            console.log(this.vehiculo);
          }
          
      },


      (error)=>{

      }

  )
       
  }






}
