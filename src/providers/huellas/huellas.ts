import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio';
import { ToastController } from 'ionic-angular';



@Injectable()
export class HuellasProvider {

  constructor(public http: HttpClient,
               private faio: FingerprintAIO ,
              public  toast:ToastController    
  ) {
  }


  LeerHuella(){


  return this.faio.show({
      clientId: 'Fingerprint-Demo',
      clientSecret: 'password', //Only necessary for Android
      disableBackup:true,  //Only for Android(optional)
      localizedFallbackTitle: 'Use Pin', //Only for iOS
      localizedReason: 'Please authenticate' //Only for iOS
  })

  }

}
