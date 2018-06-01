import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';


@Component({
  selector: 'page-buscado',
  templateUrl: 'buscado.html',
})
export class BuscadoPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public viewCtrl:ViewController
            ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuscadoPage');
  }

  cerrar(){
    this.viewCtrl.dismiss();
  }

}
