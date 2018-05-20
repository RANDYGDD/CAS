import { Component } from '@angular/core';
import {NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-notificaciones',
  templateUrl: 'notificaciones.html',
})
export class NotificacionesPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public viewCtrl:ViewController
            ) {
  }

  cerrar(){
    this.viewCtrl.dismiss();
}
}
