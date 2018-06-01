import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { MyApp } from './app.component';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


//Provider Nativos//
import { FingerprintAIO } from '@ionic-native/fingerprint-aio';
import { Toast } from '@ionic-native/toast';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Network } from '@ionic-native/network';

//Providers////
import { NoticiasProvider } from '../providers/noticias/noticias';
import { ConsultalProvider } from '../providers/consultal/consultal';
import { HuellasProvider } from '../providers/huellas/huellas';
import { RedesProvider } from '../providers/redes/redes';



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
import { PersonaPage } from '../pages/persona/persona';
import { HistorialCrimenesPage } from './../pages/historial-crimenes/historial-crimenes';
import { PlacaPage } from './../pages/placa/placa';
import { BuscadosPage } from './../pages/buscados/buscados';
import { BuscadoPage } from './../pages/buscado/buscado';
import { LocalPage } from './../pages/local/local';
import { LogsPage } from './../pages/logs/logs';

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
    MostrarNewsPage,
    PersonaPage,
    HistorialCrimenesPage,
    PlacaPage,
    BuscadosPage,
    BuscadoPage,
    LocalPage,
    LogsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,  
    FormsModule,
    ReactiveFormsModule,
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
    MostrarNewsPage,
    PersonaPage,
    HistorialCrimenesPage,
    PlacaPage,
    BuscadosPage,
    BuscadoPage,
    LocalPage,
    LogsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NoticiasProvider,
    Toast,
    ConsultalProvider,
    FingerprintAIO,
    HuellasProvider,
    BarcodeScanner,
    RedesProvider,
    Network
  ]
})
export class AppModule {}
