import { HuellasProvider } from './../../providers/huellas/huellas';
import { Component } from '@angular/core';
import {NavController, NavParams, ToastController } from 'ionic-angular';




@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public _huellas:HuellasProvider,
              public toast:ToastController,
            ) {
  }

  ionViewDidLoad() {

   this._huellas.LeerHuella()
   .then((result: any) => {

          this.toast.create({
            message:"Todo bien!",
            duration:3000
          }).present();
          
    
 }).catch((error: any) =>{
     
  });
 
  }

}
