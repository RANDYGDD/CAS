import { HuellasProvider } from './../../providers/huellas/huellas';
import { SelectUbicacionPage } from './../select-ubicacion/select-ubicacion';
import { Component } from '@angular/core';
import { ModalController, NavParams, NavController } from 'ionic-angular';
import { NotePadProvider } from '../../providers/note-pad/note-pad';


@Component({
  selector: 'page-accidente',
  templateUrl: 'accidente.html',
})
export class AccidentePage {


  cordenadas:string="";
  heridos:string="";
  vehiculos:string="";
  fecha:string="";
  tiempo:string="";
  detalle:string="";
  lat:string="";
  lng:string="";

  id:number;
  accidente:accidente;

  constructor(public modalCtrl:ModalController,
              public _notepad:NotePadProvider,
              public navParams:NavParams,
              public navCtrl:NavController,
              public _huellas:HuellasProvider
  ) {

    if( this.navParams.get("id") != undefined ){
      this.id=this.navParams.get("id");
      
      this.accidente=this._notepad.accidentes[this.id];       
      
      this.vehiculos = this.accidente.vehiculos;
      this.heridos = this.accidente.heridos;
      this.fecha = this.accidente.fecha;
      this.cordenadas = "Modificar";
      this.tiempo = this.accidente.tiempo;
      this.detalle = this.accidente.detalle;
      this.lat =this.accidente.lat;
      this.lng=this.accidente.lng;
      
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
           
            this.lat=data.lat;
            this.lng = data.lng;

            this.cordenadas= JSON.stringify(data);
 
          }
 
    })
 
   }

   huella(){

    this._huellas.LeerHuella()
    .then((result: any) => {
 
         this.enviar();
           
   }).catch((error: any) =>{
           return false;
   });
 
   }


   enviar(){

    if(this.cordenadas.length == 0 || this.heridos.length == 0 || this.vehiculos.length == 0 || 
       this.fecha.length == 0 || this.tiempo.length == 0 || this.detalle.length == 0){

        this._notepad.campos();
      

    }else{


      if(this.id != undefined){

        this.accidente.vehiculos = this.vehiculos;
        this.accidente.heridos=this.heridos;
        this.accidente.fecha=this.fecha;
        this.accidente.tiempo=this.tiempo;
        this.accidente.lng=this.lng;
        this.accidente.lat=this.lat;
        this.accidente.detalle=this.detalle;
      
        this._notepad.accidentes[this.id]=this.accidente;
        this._notepad.editar("accidente");
        this.navCtrl.pop();

      }else{


        let loading= this._notepad.cargando();

        loading.present();
  
      
        this.accidente = {
          heridos: this.heridos,
          vehiculos: this.vehiculos,
          fecha: this.fecha,
          tiempo: this.tiempo,
          detalle:this.detalle,
          lat:this.lat,
          lng:this.lng
        }
  
  
        this._notepad.CargarStorage(); 
        this._notepad.guardar("accidente",this.accidente);
        this.limpiar();
        loading.dismiss();

      }
   
    }


   }

   limpiar(){

    this.heridos="";
    this.vehiculos="";
    this.fecha="";
    this.tiempo="";
    this.detalle="";
    this.lat="";
    this.lng="";

   }

}




export interface accidente{

  heridos:string;
  vehiculos:string;
  fecha:string;
  tiempo:string;
  detalle:string;
  lat:string;
  lng:string;

}