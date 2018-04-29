import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';



  ////Pages///////
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { ConsultarPage } from '../pages/consultar/consultar';
import { RegistrarPage } from './../pages/registrar/registrar';
import { ToolsPage } from '../pages/tools/tools';
import { ConsultasPage } from './../pages/consultas/consultas';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    ConsultarPage,
    TabsPage,
    RegistrarPage,
    ToolsPage,
    ConsultasPage
  ],
  imports: [
    BrowserModule,
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
    ConsultasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
