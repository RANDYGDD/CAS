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
              public modalCtrl:ModalController
            ) {
  }


  notas(tipo:string){

    this.modalCtrl.create(NotasPage,{data:tipo}).present();

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