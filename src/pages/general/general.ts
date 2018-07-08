import { NotePadProvider } from './../../providers/note-pad/note-pad';
import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { SelectUbicacionPage } from './../select-ubicacion/select-ubicacion';



@Component({
  selector: 'page-general',
  templateUrl: 'general.html',
})
export class GeneralPage {


cordenadas:string="";
fecha: string="";
tiempo:string="";
detalle:string="";
lat:string="";
lng:string="";

  constructor(public modalCtrl:ModalController,
              public _notepad:NotePadProvider
  ) {

    this.formatear();
  }


  formatear(){

    var d = new Date(),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

       if (month.length < 2) month = '0' + month;
       if (day.length < 2) day = '0' + day;


    this.fecha= [year, month, day].join('-');
  }


  ubicacion(){

    let modal= this.modalCtrl.create(SelectUbicacionPage);
    modal.present();
 
    modal.onDidDismiss(data =>{
      
          if(data != undefined){
           
            this.lat = data.lat;
            this.lng= data.lng;
            this.cordenadas= JSON.stringify(data);
 
          }
 
    })
 
   }


   enviar(){

      if( this.cordenadas.length == 0 || this.fecha.length ==0 || this.tiempo.length ==0 ||
         this.detalle.length == 0 
      ){

        this._notepad.campos();

      }else{

        let loading = this._notepad.cargando();

        loading.present();

        console.log(this.detalle);

        loading.dismiss();

      }

     
   }




}
