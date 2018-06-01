import { BuscadoPage } from './../buscado/buscado';
import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';




@Component({
  selector: 'page-buscados',
  templateUrl: 'buscados.html',
})
export class BuscadosPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public modalCtrl:ModalController
            ) {
  }


  detalle(){
    this.modalCtrl.create(BuscadoPage).present();    
  }

}
