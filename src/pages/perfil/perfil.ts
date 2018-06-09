import { UbicacionProvider } from './../../providers/ubicacion/ubicacion';
import { Component } from '@angular/core';
import { ViewController, NavController } from 'ionic-angular';
import { UsuarioProvider } from '../../providers/usuario/usuario';
import { LoginPage } from '../login/login';


@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  constructor(public viewCtrl:ViewController,
              public navCtrl:NavController,
              private usuario:UsuarioProvider,
              private ubicacion:UbicacionProvider

  ) {
  }


  cerrar(){
      this.viewCtrl.dismiss();
  }


  salir(){
    this.usuario.borrarUsuario();
    this.navCtrl.setRoot(LoginPage);
  }



}
