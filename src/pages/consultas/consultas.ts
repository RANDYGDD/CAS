import { BuscadosPage } from './../buscados/buscados';
import { PlacaPage } from './../placa/placa';
import { NotificacionesPage } from './../notificaciones/notificaciones';
import { PerfilPage } from './../perfil/perfil';
import { Component } from '@angular/core';
import { NavController, NavParams,ModalController } from 'ionic-angular';
import { ConsultarPage } from './../consultar/consultar';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-consultas',
  templateUrl: 'consultas.html',
})
export class ConsultasPage {

  consulta=ConsultarPage;
  buscados=BuscadosPage;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public modalCtrl:ModalController,
              public alertCtrl: AlertController
            ) {
  }


perfil() {
    this.modalCtrl.create(PerfilPage).present();
}  

notificacion(){
  this.modalCtrl.create(NotificacionesPage).present();
}

showPrompt() {
  let prompt = this.alertCtrl.create({
    title: 'Placa Numérica o Alfanumérica',
    message: "Favor introducir los digítos de manera valida",
    inputs: [
      {
        name: 'placa',
        placeholder: 'Placa'
      },
    ],
    buttons: [
      {
        text: 'Cancelar',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Buscar',
        handler: data => {
            this.navCtrl.push(PlacaPage,data);
        }
      }
    ]
  });
  prompt.present();
}

}
