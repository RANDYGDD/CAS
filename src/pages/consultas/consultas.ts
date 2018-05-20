import { NotificacionesPage } from './../notificaciones/notificaciones';
import { PerfilPage } from './../perfil/perfil';
import { Component } from '@angular/core';
import { NavController, NavParams,ModalController } from 'ionic-angular';

@Component({
  selector: 'page-consultas',
  templateUrl: 'consultas.html',
})
export class ConsultasPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public modalCtrl:ModalController
            ) {
  }


perfil() {
    this.modalCtrl.create(PerfilPage).present();
}  

notificacion(){
  this.modalCtrl.create(NotificacionesPage).present();
}

}
