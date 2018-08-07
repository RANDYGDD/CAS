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



  eliminar(){

      let alert = this.alertCtrl.create({
        title: 'Eliminar',
        message: 'Eliminar Caso Pendiente de Subir?',
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            handler: () => {
             
            }
          },
          {
            text: 'Eliminar',
            handler: () => {
            
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
           
          }
        },
        {
          text: 'Enviar',
          handler: () => {
            
          }
        }
      ]
    });
    alert.present();


  }

  
}
