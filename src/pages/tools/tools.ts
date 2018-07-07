import { AyudaProvider } from './../../providers/ayuda/ayuda';
import { MiUbicacionPage } from './../mi-ubicacion/mi-ubicacion';
import { LocalPage } from './../local/local';
import { NotificacionesPage } from './../notificaciones/notificaciones';
import { PerfilPage } from './../perfil/perfil';
import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, AlertController, LoadingController, ToastController } from 'ionic-angular';
import { LogsPage } from '../logs/logs';
import { RedesProvider } from '../../providers/redes/redes';
import { CallNumber } from '@ionic-native/call-number';



@Component({
  selector: 'page-tools',
  templateUrl: 'tools.html',
})
export class ToolsPage {

  public testRadioResult:any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public modalCtrl:ModalController,
              public alertCtrl:AlertController,
              public ayuda:AyudaProvider,
              private red:RedesProvider,
              private callNumber: CallNumber,
              private loadingCtrl:LoadingController,
              private  toast:ToastController
            ) {
  }


log(){
  this.navCtrl.push(LogsPage);
}

local(){
       this.navCtrl.push(LocalPage);
  }

perfil() {
    this.modalCtrl.create(PerfilPage).present();
}  

notificacion(){
  this.modalCtrl.create(NotificacionesPage).present();
}

apoyo(){
    let alert = this.alertCtrl.create();
    alert.setTitle('Magnitud de la situación');
    alert.addInput({
      type: 'radio',
      label: 'Grado 1',
      value: '3'
    });

    alert.addInput({
      type: 'radio',
      label: 'Grado 2',
      value: '2'
    });

    alert.addInput({
      type: 'radio',
      label: 'Grado 3',
      value: '1'
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Solicitar Apoyo',
      handler: data => {
         if(this.red.Status()=="none"){
                  this.callNumber.callNumber("111111", true)
                 .then(res => console.log('Launched dialer!', res))
                .catch(err => console.log('Error launching dialer', err));

                this.toast.create({
                  message: this.red.Status(),
                  showCloseButton:true
                })
         }else{
                 this.ayuda.PedirAyuda(data);
         }
      }

    });

    alert.present();



}


ubicacion(){
     this.navCtrl.push(MiUbicacionPage);
}


}
