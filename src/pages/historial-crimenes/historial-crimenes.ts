import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, ViewController } from 'ionic-angular';


@Component({
  selector: 'page-historial-crimenes',
  templateUrl: 'historial-crimenes.html',
})
export class HistorialCrimenesPage {

  perfil:any;
  ultima_condena:any;
  prision:any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public viewCtrl:ViewController
             
            ) {

             this.perfil=this.viewCtrl.data;
             this.ultima_condena=this.perfil.perfil.data.ultima_condena;
             this.prision=this.perfil.perfil.data.prision;
  }



  cerrar(){
    this.viewCtrl.dismiss();
}


}
