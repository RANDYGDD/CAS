import { AlertController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable()
export class ConsultalProvider {

  public perfil:any[]=[];

  constructor(public http: HttpClient,
              public alertCtrl:AlertController
  ) {
   
  }



  ConsultarPlaca(placa:string){

    //OE02400
    return this.http.post('http://178.128.67.94/api/vehicle-profile',{'placa':placa});
  }

  ConsultarPerfil(cedula:string){
       //40212546781
      return this.http.post('http://178.128.67.94/api/criminal-profile',{'cedula':cedula});
  }


  PersonasBuscadas(){

    return this.http.post('http://178.128.67.94/api/notifications','');

  }


  Estadisticas(){

      return this.http.post('http://178.128.67.94/api/estadisticas','');
  }

  Mensaje(data:any){

      this.alertCtrl.create({
         title:"Ops!",
         message:data,
         buttons: ['Cerrar'],
      }).present();

  }


  Ivalidos(){
    this.alertCtrl.create({
      title:"Datos invalidos!",
      message:"Favor de introducir una cédula valída.",
      buttons: ['Cerrar'],
   }).present();

  }

}
