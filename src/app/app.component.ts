import { TabsPage } from './../pages/tabs/tabs';
import { UsuarioProvider } from './../providers/usuario/usuario';
import { LoginPage } from './../pages/login/login';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar, 
    splashScreen: SplashScreen,
     public _usuario:UsuarioProvider
  ) {

    platform.ready().then(() => {
      _usuario.CargarStorage().then(existe=>{
        
        statusBar.styleDefault();
        splashScreen.hide();

          if(existe){
            this.rootPage=TabsPage;
          }else{
            this.rootPage=LoginPage;
          }

      });
      
    });
  }
}

