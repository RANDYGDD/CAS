import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { SelectUbicacionPage } from './../select-ubicacion/select-ubicacion';


@Component({
  selector: 'page-general',
  templateUrl: 'general.html',
})
export class GeneralPage {


  public cordenadas:any;

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
