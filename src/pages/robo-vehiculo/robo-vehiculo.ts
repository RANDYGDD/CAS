import { SelectUbicacionPage } from './../select-ubicacion/select-ubicacion';
import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';

@Component({
  selector: 'page-robo-vehiculo',
  templateUrl: 'robo-vehiculo.html',
})

export class RoboVehiculoPage {

  public cordenadas;
  
  constructor(public modalCtrl:ModalController) {
  }



  ubicacion(){

    let modal= this.modalCtrl.create(SelectUbicacionPage);
    modal.present();
 
    modal.onDidDismiss(data =>{
      
          if(data != undefined){
           
            this.cordenadas= JSON.stringify(data);
 
          }
 
    })
 
   }


}
