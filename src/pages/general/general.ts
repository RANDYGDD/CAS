import { general } from './general';
import { NotePadProvider } from './../../providers/note-pad/note-pad';
import { Component } from '@angular/core';
import { ModalController, NavParams, NavController } from 'ionic-angular';
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

id:number;

general:general;

  constructor(public modalCtrl:ModalController,
              public _notepad:NotePadProvider,
              public navParams:NavParams,
              public navCtrl:NavController
  ) {

    if( this.navParams.get("id") != undefined ){
      this.id=this.navParams.get("id");

      this.general=this._notepad.generales[this.id];
      
      this.fecha=this.general.fecha;
      this.tiempo=this.general.tiempo;
      this.detalle=this.general.detalle;
      this.cordenadas="Modificar";
      this.lat=this.general.lat;
      this.lng=this.general.lng;

    }else{

      this.formatear();
    }

   
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

        if(this.id != undefined){

           this.general.fecha=this.fecha;
           this.general.tiempo=this.tiempo;
           this.general.detalle=this.detalle;
           this.general.lat=this.lat;
           this.general.lng=this.lng;


          this._notepad.generales[this.id]=this.general;
          this._notepad.editar("general");
          this.navCtrl.pop();


        }else{

          let loading = this._notepad.cargando();

          loading.present();
  
          this.general={
              fecha:this.fecha,
              tiempo:this.tiempo,
              detalle:this.detalle,
              lat: this.lat,
              lng:this.lng
          }
  
          this._notepad.CargarStorage(); 
          this._notepad.guardar("general",this.general);
          
          loading.dismiss();
  
        }

       
      }

     
   }




}


export interface general{

fecha: string;
tiempo:string;
detalle:string;
lat:string;
lng:string;

}
