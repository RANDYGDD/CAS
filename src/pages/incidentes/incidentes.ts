import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RegistrarPage } from '../registrar/registrar';
import { AccidentePage } from '../accidente/accidente';
import { RoboVehiculoPage } from '../robo-vehiculo/robo-vehiculo';

@Component({
  selector: 'page-incidentes',
  templateUrl: 'incidentes.html',
})
export class IncidentesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IncidentesPage');
  }


  crimenes(){
      this.navCtrl.push(RegistrarPage);
  }

  accidente(){
      this.navCtrl.push(AccidentePage);
  }

  robo(){
    this.navCtrl.push(RoboVehiculoPage);
  }



}
