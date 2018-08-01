import { HistorialCrimenesPage } from './../historial-crimenes/historial-crimenes';
import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

@Component({
  selector: 'page-persona',
  templateUrl: 'persona.html',
})
export class PersonaPage {

  perfil:any;
  persona:any;
  crimen:number=0;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public modalCtrl:ModalController
            ) {

       this.perfil=this.navParams.get('perfil')

      
       this.persona=this.perfil.data.person;

       console.log(this.persona);
         
       if(this.perfil.data.ultima_condena){
          this.crimen=1;

       }
  }

  
  
  
  
  historial(){
    this.modalCtrl.create(HistorialCrimenesPage,{'perfil':this.perfil}).present();
  }

}
