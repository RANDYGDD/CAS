import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { MyApp } from './app.component';




import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//Firebase///
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { firebaseConf } from './../config/firebase.config';


//Provider Nativos//
import { FingerprintAIO } from '@ionic-native/fingerprint-aio';
import { Toast } from '@ionic-native/toast';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Network } from '@ionic-native/network';
import { IonicStorageModule } from '@ionic/storage';
import { Geolocation } from '@ionic-native/geolocation';
import { CallNumber } from '@ionic-native/call-number';
import { OneSignal } from '@ionic-native/onesignal';




//Providers////
import { NoticiasProvider } from '../providers/noticias/noticias';
import { ConsultalProvider } from '../providers/consultal/consultal';
import { HuellasProvider } from '../providers/huellas/huellas';
import { RedesProvider } from '../providers/redes/redes';
import { UsuarioProvider } from '../providers/usuario/usuario';
import { UbicacionProvider } from '../providers/ubicacion/ubicacion';


///Plugin mapas///
import { AgmCoreModule } from '@agm/core';
import { ChartsModule } from 'ng2-charts';

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
import { MiUbicacionPage } from './../pages/mi-ubicacion/mi-ubicacion';
import { AyudaProvider } from '../providers/ayuda/ayuda';
import { GraficosPage } from './../pages/graficos/graficos';
import { IncidentesPage } from './../pages/incidentes/incidentes';
import { RoboVehiculoPage } from '../pages/robo-vehiculo/robo-vehiculo';
import { AccidentePage } from './../pages/accidente/accidente';
import { PushNotificationsProvider } from '../providers/push-notifications/push-notifications';
import { GeneralPage } from './../pages/general/general';
import { SelectUbicacionPage } from './../pages/select-ubicacion/select-ubicacion';
import { NotePadProvider } from '../providers/note-pad/note-pad';
import { NotasPage } from '../pages/notas/notas';


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
    LogsPage,
    MiUbicacionPage,
    GraficosPage,
    IncidentesPage,
    RoboVehiculoPage,
    AccidentePage,
    GeneralPage,
    SelectUbicacionPage,
    NotasPage
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,  
    FormsModule,
    ReactiveFormsModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConf),
    AngularFirestoreModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDKlahhqLC1v6mBQPh6scKeUfK_TFn7HR8'
    }),
    ChartsModule
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
    LogsPage,
    MiUbicacionPage,
    GraficosPage,
    IncidentesPage,
    RoboVehiculoPage,
    AccidentePage,
    GeneralPage,
    SelectUbicacionPage,
    NotasPage
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
    Network,
    Geolocation,
    UsuarioProvider,
    UbicacionProvider,
    AyudaProvider,
    CallNumber,
    OneSignal,
    PushNotificationsProvider,
    NotePadProvider
  ]
})
export class AppModule {}
