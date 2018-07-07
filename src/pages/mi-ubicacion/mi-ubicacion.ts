import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { UbicacionProvider } from './../../providers/ubicacion/ubicacion';

@Component({
  selector: 'page-mi-ubicacion',
  templateUrl: 'mi-ubicacion.html',
})
export class MiUbicacionPage {

  ImgUrl='assets/imgs/police_car.png';

 public user:any={}



  constructor(public navCtrl: NavController,
              public ubicacion:UbicacionProvider,
  ) {

  
 
    this.user=ubicacion.obtenerUbicacion();


  }

}
