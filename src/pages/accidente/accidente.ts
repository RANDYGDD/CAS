import { SelectUbicacionPage } from './../select-ubicacion/select-ubicacion';
import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';


@Component({
  selector: 'page-accidente',
  templateUrl: 'accidente.html',
})
export class AccidentePage {


  public cordenadas:any;

  constructor(public modalCtrl:ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccidentePage');
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