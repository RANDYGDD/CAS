import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';


@Component({
  selector: 'page-local',
  templateUrl: 'local.html',
})
export class LocalPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl:AlertController
            ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocalPage');
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

  enviar(){

    let alert = this.alertCtrl.create({
      title: 'Enviar',
      message: 'Desea enviar el item al servidor?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancelado');
          }
        },
        {
          text: 'Enviar',
          handler: () => {
            console.log('Articulo eliminado');
          }
        }
      ]
    });
    alert.present();


  }

  
}
