import { Injectable } from '@angular/core';
import { Network } from '@ionic-native/network';
import { AlertController } from 'ionic-angular';


@Injectable()
export class RedesProvider {

  red:any;
  constructor(private network:Network,
              private alertCtrl:AlertController
   ) {

   }

EstatusNetwork(){

  let alert = this.alertCtrl.create({
    title: 'Network',
    subTitle:this.network.type,
    buttons: ['Dismiss']
  });
  alert.present();
}

Status(){
     this.red=this.network.type;

     console.log(this.red);

     return this.red;
}
  


}
