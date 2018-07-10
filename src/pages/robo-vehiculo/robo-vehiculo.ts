import { robo } from './robo-vehiculo';
import { SelectUbicacionPage } from './../select-ubicacion/select-ubicacion';
import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { NotePadProvider } from './../../providers/note-pad/note-pad';

@Component({
  selector: 'page-robo-vehiculo',
  templateUrl: 'robo-vehiculo.html',
})

export class RoboVehiculoPage {


 marca:string="";
 modelo:string="";
 cordenadas:string="";
 year:string="";
 color:string="";
 num_chasis:string="";
 fecha:string="";
 tiempo:string="";
 detalle:string="";
 lat:string="";
 lng:string="";

 robo:robo;

  
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
           
            this.lat=data.lat;
            this.lng=data.lng;

            this.cordenadas= JSON.stringify(data);
 
          }
 
    })
 
   }



   enviar(){

    if(this.marca.length == 0 || this.modelo.length == 0 || this.cordenadas.length == 0 ||
       this.fecha.length == 0 || this.tiempo.length == 0 || this.detalle.length == 0
       || this.color.length == 0 || this.year.length == 0
      ){
        this._notepad.campos();
       }else{

        let loading = this._notepad.cargando();
        loading.present();

        this.robo={
          marca:this.marca,
          modelo:this.modelo,
          year:this.year,
          color:this.color,
          num_chasis:this.num_chasis,
          fecha:this.fecha,
          tiempo:this.tiempo,
          detalle:this.detalle,
          lat:this.lat,
          lng:this.lng,
        }


        this._notepad.CargarStorage(); 
        this._notepad.guardar("robo",this.robo);
        
        loading.dismiss();


       }



   }


}

export interface robo{
  marca:string;
  modelo:string;
  year:string;
  color:string;
  num_chasis?:string;
  fecha:string;
  tiempo:string;
  detalle:string;
  lat:string;
  lng:string;

}
