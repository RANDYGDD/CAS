import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio';



@Injectable()
export class HuellasProvider {

  constructor(public http: HttpClient,
               private faio: FingerprintAIO  
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
