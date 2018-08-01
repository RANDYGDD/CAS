import { ConsultalProvider } from './../../providers/consultal/consultal';
import { BuscadoPage } from './../buscado/buscado';
import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';




@Component({
  selector: 'page-buscados',
  templateUrl: 'buscados.html',
})
export class BuscadosPage {

  info:any=[];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public modalCtrl:ModalController,
              public _buscados:ConsultalProvider
            ) {

          
           this._buscados.PersonasBuscadas().subscribe(

            (data:any)=>{
              
                 this.info=data.data.notificaciones.data;
                 
            },

           (error)=>{

           }
          
          
          )    


  }





  detalle(info:any=[]){
    this.modalCtrl.create(BuscadoPage,{'info':info}).present();    
  }

}
