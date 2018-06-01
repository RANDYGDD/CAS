import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, ViewController } from 'ionic-angular';


@Component({
  selector: 'page-historial-crimenes',
  templateUrl: 'historial-crimenes.html',
})
export class HistorialCrimenesPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public viewCtrl:ViewController
             
            ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistorialCrimenesPage');
  }


  cerrar(){
    this.viewCtrl.dismiss();
}


}
