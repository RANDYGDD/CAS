import { GeneralPage } from './../general/general';
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
  
  crimenes(){
      this.navCtrl.push(RegistrarPage);
  }

  accidente(){
      this.navCtrl.push(AccidentePage);
  }

  robo(){
    this.navCtrl.push(RoboVehiculoPage);
  }

  general(){

    this.navCtrl.push(GeneralPage);

  }



}
