import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-logs',
  templateUrl: 'logs.html',
})
export class LogsPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public alertCtrl:AlertController
            ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogsPage');
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
