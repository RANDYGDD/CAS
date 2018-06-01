import { HistorialCrimenesPage } from './../historial-crimenes/historial-crimenes';
import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

@Component({
  selector: 'page-persona',
  templateUrl: 'persona.html',
})
export class PersonaPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public modalCtrl:ModalController
            ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonaPage');
  }

  historial(){
    this.modalCtrl.create(HistorialCrimenesPage).present();
  }

}
