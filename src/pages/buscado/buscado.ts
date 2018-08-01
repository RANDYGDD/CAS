import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';


@Component({
  selector: 'page-buscado',
  templateUrl: 'buscado.html',
})
export class BuscadoPage {

  info2:any={};
  info:any={};
  person:any={};

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public viewCtrl:ViewController
            ) {
  }

  ionViewDidLoad() {
   
     this.info2=this.viewCtrl.data;

     this.info=this.info2.info;
     this .person=this.info.person;
  }

  cerrar(){
    this.viewCtrl.dismiss();
  }

}
