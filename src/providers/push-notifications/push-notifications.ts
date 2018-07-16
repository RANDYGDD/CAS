import { Platform, AlertController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal';


@Injectable()
export class PushNotificationsProvider {

  constructor(private oneSignal: OneSignal,
              public platform:Platform,
              //public alerCtrl:AlertController
  ) {
    
  }


  init_notifications(){

    if( this.platform.is('cordova') ){
      
      this.oneSignal.startInit('c76cb4e3-4208-4e8e-aee7-873c92975056', '1079018167723');

      //this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

      this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
      
      this.oneSignal.handleNotificationReceived().subscribe(() => {
       // do something when notification is received

       //alert(notificacion);

      });
      
      this.oneSignal.handleNotificationOpened().subscribe(() => {
        // do something when a notification is opened

       // this.navCtrl.push(MostrarNewsPage);
        
        

      });


      

      
      this.oneSignal.endInit();

    }else{

      console.log("One Signal no funciona en Chrome");
    }

  }


}
