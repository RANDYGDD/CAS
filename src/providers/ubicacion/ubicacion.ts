import { UsuarioProvider } from './../usuario/usuario';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Geolocation } from '@ionic-native/geolocation';
import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';



@Injectable()
export class UbicacionProvider {


  policia: AngularFirestoreDocument<any>;
  private watch: Subscription;

  constructor(private geolocation:Geolocation,
              public usuario:UsuarioProvider,
              private afDB:AngularFirestore
  
  ) {
              
    
  }

  iniciarPolicia(){

    this.policia = this.afDB.doc(`/usuarios/${this.usuario.clave}`);

  }


  iniciarGeolocalizacion(){

    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude

      this.policia.update({
            lat: resp.coords.latitude,
            lng: resp.coords.longitude,
            clave: this.usuario.clave
      });

      this.watch = this.geolocation.watchPosition()

           .subscribe((data) =>{
               
                this.policia.update({
                  lat: data.coords.latitude,
                  lng: data.coords.longitude,
                  speed: data.coords.speed,
                  altitud: data.coords.altitude,
                  accuracy: data.coords.accuracy,
                  heading:data.coords.heading,
                  altitudeAccuracy: data.coords.altitudeAccuracy,
                  time: data.timestamp.toString(),
                  clave: this.usuario.clave
            });
                    
              });

     }).catch((error) => {
       console.log('Error getting location', error);
     });

  }

  detenerUbicacion(){

    try{
      this.watch.unsubscribe();

    }catch(e){
      console.log(JSON.stringify(e));
    }
  }

}
