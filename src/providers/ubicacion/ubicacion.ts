import { UsuarioProvider } from './../usuario/usuario';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Geolocation } from '@ionic-native/geolocation';
import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';



@Injectable()
export class UbicacionProvider {


  policia: AngularFirestoreDocument<any>;
  private watch: Subscription;
  public user:any={}

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
     

      this.user={
        lat: resp.coords.latitude,
        lng:resp.coords.longitude,
        exactitud:resp.coords.accuracy
      }
     
     
     

      this.policia.update({
            lat: resp.coords.latitude,
            lng: resp.coords.longitude,
            clave: this.usuario.clave
      });

      this.watch = this.geolocation.watchPosition()
            .subscribe((data) =>{

              this.user={
                lat: data.coords.latitude,
                lng:data.coords.longitude,
                exactitud:data.coords.accuracy
              }



              console.log(data);
               
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


  

  obtenerUbicacion(){

    return this.user;

  }


  detenerUbicacion(){
     
       this.watch.unsubscribe();
  }


  

}
