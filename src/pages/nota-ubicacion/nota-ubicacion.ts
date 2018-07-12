import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';


@Component({
  selector: 'page-nota-ubicacion',
  templateUrl: 'nota-ubicacion.html',
})
export class NotaUbicacionPage {

  lat:number;
  lng:number;

  
  constructor(public viewCtrl:ViewController) {

    this.lat=this.viewCtrl.data.lat;
    this.lng=this.viewCtrl.data.lng;

  }

 
  cerrar(){
    this.viewCtrl.dismiss();
  }

}
