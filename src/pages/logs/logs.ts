import { HuellasProvider } from './../../providers/huellas/huellas';
import { NotasPage } from './../notas/notas';
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ModalController } from 'ionic-angular';

@Component({
  selector: 'page-logs',
  templateUrl: 'logs.html',
})
export class LogsPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public alertCtrl:AlertController,
              public modalCtrl:ModalController,
              public _huellas:HuellasProvider
            ) {
  }


  notas(tipo:string){

  this._huellas.LeerHuella()
    .then((result: any) => {

      this.modalCtrl.create(NotasPage,{data:tipo}).present();
      
   }).catch((error: any) =>{
           return false;
   });


  }



  
  eliminar(){

    let alert = this.alertCtrl.create({
      title: 'Eliminar',
      message: 'Eliminar Caso Pendiente de Subir?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancelado');
          }
        },
        {
          text: 'Eliminar',
          handler: () => {
            console.log('Articulo eliminado');
          }
        }
      ]
    });
    alert.present();


  }

}