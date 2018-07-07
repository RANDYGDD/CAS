import { Injectable } from '@angular/core';
import { UsuarioProvider } from './../usuario/usuario';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';

@Injectable()
export class AyudaProvider {

  policia: AngularFirestoreDocument<any>;
  datos:any;

  constructor( public usuario:UsuarioProvider,
               private afDB:AngularFirestore
   ){
      this.policia = this.afDB.doc(`/ayuda/${this.usuario.clave}`);
  }

  PedirAyuda(gravedad){

   this.ObtenerData().subscribe((data:any)=>{

    this.policia.set({
      gravedad:gravedad,
      fecha: new Date(),
      lat: data.lat,
      lng: data.lng,
      nombre:data.nombre,
      speed: data.speed,
      altitud: data.altitud,
      accuracy: data.accuracy,
      heading:data.heading,
      altitudeAccuracy: data.altitudeAccuracy,
      clave: this.usuario.clave
     });    

    
  });
  }

  ObtenerData(){
    return this.afDB.doc(`/usuarios/${this.usuario.clave}`).valueChanges();
  }

}
