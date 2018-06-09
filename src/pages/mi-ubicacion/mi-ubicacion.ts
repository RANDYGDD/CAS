import { UbicacionProvider } from './../../providers/ubicacion/ubicacion';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-mi-ubicacion',
  templateUrl: 'mi-ubicacion.html',
})
export class MiUbicacionPage {

  ImgUrl='assets/imgs/police_car.png';
  lat: number;
  lng: number;


  user:any={};

  constructor(public navCtrl: NavController,
              public ubicacion:UbicacionProvider,
  ) {


    this.ubicacion.policia.valueChanges().subscribe(data=>{
                    
          this.user=data;
    });

  }

}
