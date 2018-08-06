import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, LoadingController, AlertController } from 'ionic-angular';
import { UsuarioProvider } from './../../providers/usuario/usuario';
import { HuellasProvider } from './../../providers/huellas/huellas';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  private clave:string;
  private contrasena:string;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public _huellas:HuellasProvider,
              public toast:ToastController,
              public alertCtrl:AlertController,
              public loadingCrtl: LoadingController,
              public _usuarioProf: UsuarioProvider
            ) {
  }

  ngOnInit(){

  }

  LectorHuella(){

   this._huellas.LeerHuella()
   .then((result: any) => {

         return true;    
          
  }).catch((error: any) =>{
          return false;
  });


 
  }


private validarUsuario(clave:string,contrasena:string){

  let loading =  this.loadingCrtl.create({
         content:'Verificando'
  });

  loading.present();

  this._usuarioProf.verificarUsuario( clave,contrasena )
      .then(existe =>{

         loading.dismiss();

           if( existe ){

              this.navCtrl.setRoot(TabsPage);        
           }else{
            
            this.alertCtrl.create({
               title: 'Usuario Incorrecto',
               subTitle: 'Hable con el administrador o intentes de nuevo',
               buttons: ['Aceptar']
             }).present();
             
           }

      })
    
}


ingresar(){
     this.validarUsuario(this.clave,this.contrasena);
}


}
