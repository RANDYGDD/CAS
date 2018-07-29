import { HuellasProvider } from './../../providers/huellas/huellas';
import { crimen } from './registrar';
import { SelectUbicacionPage } from './../select-ubicacion/select-ubicacion';
import { Component } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';
import { NotePadProvider } from '../../providers/note-pad/note-pad';


@Component({
  selector: 'page-registrar',
  templateUrl: 'registrar.html',
})
export class RegistrarPage {


  //Atributos
  public incidente:string="";
  public cordenadas: string="";
  public tiempo:string="";
  public fecha: string;
  public detalle:string="";
  public lat:string="";
  public lng:string="";

  public crimen:crimen;
  
  public id:number;

  
  constructor(public navCtrl: NavController,
              public modalCtrl:ModalController,
              public _notepad:NotePadProvider,
              public navParams:NavParams,
              public _huellas:HuellasProvider
            ) {

             

              if( this.navParams.get("id") != undefined ){
                this.id=this.navParams.get("id");
                
                this.crimen=this._notepad.crimenes[this.id];       
                
                this.incidente=this.crimen.incidente;
                this.fecha = this.crimen.fecha;
                this.cordenadas = "Modificar";
                this.tiempo = this.crimen.tiempo;
                this.detalle = this.crimen.detalle;
                this.lat =this.crimen.lat;
                this.lng=this.crimen.lng;
                
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
            this.lng=data.lng;

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

    if(
      this.incidente.length == 0 || this.cordenadas.length == 0 || this.fecha.length ==0 ||
      this.tiempo.length==0 || this.detalle.length == 0   
    ){
      this._notepad.campos();

    }else{


      if(this.id != undefined){

        this.crimen.incidente=this.incidente;
        this.crimen.detalle=this.detalle;
        this.crimen.fecha=this.fecha;
        this.crimen.tiempo=this.tiempo;
        this.crimen.lng=this.lng;
        this.crimen.lat=this.lat;
      
        this._notepad.crimenes[this.id] = this.crimen;
        this._notepad.editar("crimen");
        this.navCtrl.pop();


      }else{

        let loading=this._notepad.cargando();

        loading.present();
    
          this.crimen={
            incidente: this.incidente,
            fecha: this.fecha,
            tiempo:this.tiempo,
            detalle: this.detalle,
            lat:this.lat,
            lng: this.lng
          }
    
         this._notepad.CargarStorage(); 
         this._notepad.guardar("crimen",this.crimen);
         this.limpiar();
         loading.dismiss();

      }


    }

  }



  limpiar(){

    this.incidente="";
    this.fecha="";
    this.tiempo="";
    this.detalle="";
    this.lat="";
    this.lng="";

  }


}


export interface crimen{
  incidente:string,
  fecha:string,
  tiempo:string,
  detalle:string;
  lat:string;
  lng:string;
}
