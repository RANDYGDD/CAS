import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { UbicacionProvider } from '../../providers/ubicacion/ubicacion';


@Component({
  selector: 'page-select-ubicacion',
  templateUrl: 'select-ubicacion.html',
})
export class SelectUbicacionPage {


  public user:any={};
  public lat:any;
  public lng:any;

  constructor( public viewCtrl:ViewController,
               public ubicacion:UbicacionProvider
  ) {

      this.user=this.ubicacion.obtenerUbicacion();    
      this.lat=this.user.lat;
      this.lng=this.user.lng;  
  }

  clickMapa(evento){
      this.lat=evento.coords.lat;
      this.lng=evento.coords.lng;
    }

    dragEndMarcador(evento){
  
      this.lat=evento.coords.lat;
      this.lng=evento.coords.lng;   
    }




  guardar(){
    
    this.viewCtrl.dismiss({lat:this.lat,lng:this.lng});

  }


  cerrar(){
    this.viewCtrl.dismiss();
  }

  


}
