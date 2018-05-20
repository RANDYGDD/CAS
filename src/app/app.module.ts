import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


//Providers////
import { NoticiasProvider } from '../providers/noticias/noticias';


  ////Pages///////
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { ConsultarPage } from '../pages/consultar/consultar';
import { RegistrarPage } from './../pages/registrar/registrar';
import { ToolsPage } from '../pages/tools/tools';
import { PerfilPage } from './../pages/perfil/perfil';
import { NotificacionesPage } from './../pages/notificaciones/notificaciones';
import { ConsultasPage } from './../pages/consultas/consultas';
import { MostrarNewsPage } from './../pages/mostrar-news/mostrar-news';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    ConsultarPage,
    TabsPage,
    RegistrarPage,
    ToolsPage,
    ConsultasPage,
    NotificacionesPage,
    PerfilPage,
    MostrarNewsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,  
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    LoginPage,
    ConsultarPage,
    RegistrarPage,
    ToolsPage,
    ConsultasPage,
    NotificacionesPage,
    PerfilPage,
    MostrarNewsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NoticiasProvider
  ]
})
export class AppModule {}
