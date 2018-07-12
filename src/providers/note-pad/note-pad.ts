import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController, LoadingController, Platform, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';




@Injectable()
export class NotePadProvider {

  public crimenes:any[]=[];
  public accidentes:any[]=[];
  public robos:any[]=[];
  public generales:any[]=[];




  constructor(public http: HttpClient,
              public alertCtrl:AlertController,
              public loadingCtrl:LoadingController,
              public platform:Platform,
              public storage:Storage,
              public toast:ToastController

  ) {
   
  }

  public eliminar(id:number,tipo:string){
    
    if(this.platform.is('android')){
             //Celular
             switch(tipo){
                 case "crimen":
                        this.crimenes.splice(id,1);
                        this.storage.set("crimen",this.crimenes);
                    break;

                 case "accidente":
                        this.accidentes.splice(id,1);
                         this.storage.set("accidente",this.accidentes);
                      break;
                 case "robo":
                          this.robos.splice(id,1);
                          this.storage.set("robo",this.robos);
                      break;
                  case "general":
                          this.generales.splice(id,1);
                          this.storage.set("general",this.generales);
                    break;

             }     

    }else{

      switch(tipo){

        case "crimen":
             this.crimenes.splice(id,1);
             localStorage.setItem("crimen", JSON.stringify(this.crimenes));
           break;

        case "accidente":
               this.accidentes.splice(id,1);
               localStorage.setItem("accidente", JSON.stringify(this.accidentes));
             break;
        case "robo":
                this.robos.splice(id,1);
                localStorage.setItem("robo", JSON.stringify(this.robos));
             break;
         case "general":
               this.generales.splice(id,1);
               localStorage.setItem("general", JSON.stringify(this.generales));
           break;
    } 
  }


 }


public  campos(){

  
  let alert = this.alertCtrl.create({
    title: 'Campos Requerídos',
    subTitle:"Para mejores notas, todos los campos marcados con asteríscos (*) son reuquerídos.",
    buttons: ['Cerrar']
  });

  alert.present();


 }



 public enviarNotas(nota:any){

  return this.http.get("www.google.com");

 }


 cargando(){

  let loading = this.loadingCtrl.create({
        content: 'Enviando....'
   });


   return loading;

 }


 


 public guardar(tipo:string,data:any){
    
    if(this.platform.is('android')){
      
             //Celular
             switch(tipo){
                 case "crimen":
                        this.crimenes.push(data);
                        this.storage.set("crimen",this.crimenes);

                        this.toast.create({
                          message:"Almacenado 3 crimen: " + tipo,
                          duration:5000,
                        }).present();
                        
                    break;

                 case "accidente":
                        this.accidentes.push(data);
                         this.storage.set("accidente",this.accidentes);
                      break;
                 case "robo":
                          this.robos.push(data);
                          this.storage.set("robo",this.robos);
                      break;
                  case "general":
                          this.generales.push(data)
                          this.storage.set("general",this.generales);
                    break;

             }     

    }else{

      switch(tipo){

        case "crimen":
             this.crimenes.push(data);
             localStorage.setItem("crimen", JSON.stringify(this.crimenes));
           break;

        case "accidente":
               this.accidentes.push(data);
               localStorage.setItem("accidente", JSON.stringify(this.accidentes));
             break;
        case "robo":
                this.robos.push(data);
                localStorage.setItem("robo", JSON.stringify(this.robos));
             break;
         case "general":
               this.generales.push(data);
               localStorage.setItem("general", JSON.stringify(this.generales));
           break;
    } 
  }


 }


 public editar(tipo:string){
    
  if(this.platform.is('android')){
           //Celular
           switch(tipo){
               case "crimen":
                      this.storage.set("crimen",this.crimenes);
                  break;

               case "accidente":
                       this.storage.set("accidente",this.accidentes);
                    break;
               case "robo":
                        this.storage.set("robo",this.robos);
                    break;
                case "general":
                        this.storage.set("general",this.generales);
                  break;

           }     

  }else{

    switch(tipo){

      case "crimen":
           localStorage.setItem("crimen", JSON.stringify(this.crimenes));
         break;

      case "accidente":
             localStorage.setItem("accidente", JSON.stringify(this.accidentes));
           break;
      case "robo":
              localStorage.setItem("robo", JSON.stringify(this.robos));
           break;
       case "general":
             localStorage.setItem("general", JSON.stringify(this.generales));
         break;
  } 
}


}



public CargarStorage(){

  if(this.platform.is("android")){

    this.storage.ready()
             .then(()=>{
               this.storage.get("crimen")
                 .then (data =>{
                     if(data){
                       this.crimenes=data;
                     }
                    
                 });


              this.storage.get("accidente")
                 .then (data =>{
                     if(data){
                       this.accidentes=data;
                     }
                    
                 });

              this.storage.get("robo")
                 .then (data =>{
                     if(data){
                       this.robos=data;
                     }
                    
                 });

                 this.storage.get("general")
                 .then (data =>{
                     if(data){
                       this.generales=data;
                     }   
                 });
             })     

    }else{

    if(localStorage.getItem('crimen')){
         this.crimenes=JSON.parse(localStorage.getItem('crimen'));
      }

      if(localStorage.getItem('accidente')){
        this.accidentes=JSON.parse(localStorage.getItem('accidente'));
     }

     if(localStorage.getItem('robo')){
      this.robos=JSON.parse(localStorage.getItem('robo'));
   }

   if(localStorage.getItem('general')){
     this.generales=JSON.parse(localStorage.getItem('general'));
 }
 
}

 }



}