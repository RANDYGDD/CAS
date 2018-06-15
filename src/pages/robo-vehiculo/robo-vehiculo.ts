import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-robo-vehiculo',
  templateUrl: 'robo-vehiculo.html',
})
export class RoboVehiculoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RoboVehiculoPage');
  }

}
