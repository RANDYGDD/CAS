import { crimen } from './registrar';
import { SelectUbicacionPage } from './../select-ubicacion/select-ubicacion';
import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { NotePadProvider } from '../../providers/note-pad/note-pad';

@Component({
  selector: 'page-registrar',
  templateUrl: 'registrar.html',
})
export class RegistrarPage {
  public fecha: string;

  //Atributos
  public incidente:string="";
  public cordenadas: string="";
  public date:string="";
  public tiempo:string="";
  public detalle:string="";
  public lat:string="";
  public lng:string="";

  public crimen:crimen;
  


  
  constructor(public navCtrl: NavController,
              public modalCtrl:ModalController,
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



    if(
      this.incidente.length == 0 || this.cordenadas.length == 0 || this.date.length ==0 ||
      this.tiempo.length==0 || this.detalle.length == 0   
    ){
      this._notepad.campos();

    }else{

    let loading=this._notepad.cargando();

    loading.present();

      this.crimen={
        incidente: this.incidente,
        date: this.date,
        tiempo:this.tiempo,
        detalle: this.detalle,
        lat:this.lat,
        lng: this.lng
      }

     //this._notepad.guardar()

     loading.dismiss();
    }

  }



}


export interface crimen{
  incidente:string,
  date:string,
  tiempo:string,
  detalle:string;
  lat:string;
  lng:string;
}
