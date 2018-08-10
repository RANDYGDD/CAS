import { UbicacionProvider } from './../../providers/ubicacion/ubicacion';
import { Component } from '@angular/core';
import { ViewController, NavController, LoadingController } from 'ionic-angular';
import { UsuarioProvider } from '../../providers/usuario/usuario';
import { LoginPage } from '../login/login';
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {



  constructor(public viewCtrl:ViewController,
              public navCtrl:NavController,
              private ubicacion:UbicacionProvider,
              public usuario:UsuarioProvider,
              public loadingCtrl:LoadingController

  ) {

    
    let loading = this.loadingCtrl.create({
      content: 'Cargando....'
    });

     loading.present();
    this.usuario.CargarStorage();
    loading.dismiss();
  
  }


  cerrar(){
      this.viewCtrl.dismiss();
  }




  salir(){

    let loading = this.loadingCtrl.create({
      content: 'Cargando....'
    });

    loading.present();

    this.usuario.borrarUsuario();
    this.ubicacion.detenerUbicacion();
    this.navCtrl.setRoot(LoginPage);
    loading.dismiss();
  }



}
