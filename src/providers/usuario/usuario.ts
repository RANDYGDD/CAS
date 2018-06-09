import { Subscription } from 'rxjs/Subscription';
import { Platform } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Storage } from '@ionic/storage';

@Injectable()
export class UsuarioProvider {

  clave:string;
  user: any = {};

  private doc: Subscription;

  constructor(private afDB:AngularFirestore,
              private storage: Storage,
              private platform:Platform
  ) {
     
  }


  verificarUsuario(clave:string){

    clave= clave.toLocaleLowerCase();

    return new Promise( (resolve,reject) =>{
      
     this.doc= this.afDB.doc(`/usuarios/${ clave }`)
          .valueChanges().subscribe(data=>{
               console.log(data);

               if(data){
                 //correcto
                 this.clave = clave;
                 this.user = data;

                 this.guardarStorage();
                 resolve(true);
               }else{
                 resolve(false);
                 //incorrecto
               }
          })
             
    });

  }


  guardarStorage(){

    if(this.platform.is('cordava')){
             //Celular
            this.storage.set('clave',this.clave);         

    }else{
        //Escritorio
        localStorage.setItem('clave',this.clave);

    }

    

  }

  CargarStorage(){

    return new Promise( (resolve, reject)=>{

      if(this.platform.is('cordava')){
        //Celular

        this.storage.get('clave').then(val=>{

          if(val){
            this.clave=val;
            resolve(true)
          }else{
            resolve(false);

          }

        });

       this.storage.set('clave',this.clave);         

      }else{
        //Escritorio
         if(localStorage.getItem('clave')){
           this.clave=localStorage.getItem('clave');
           resolve(true);
         }else{
           resolve(false);
         }

    }

    })

  }


  borrarUsuario(){
    this.clave=null;


  if(this.platform.is('cordava')){
      //Celular
     this.storage.remove('clave');         

}else{
 //Escritorio
 localStorage.removeItem("clave");

}

  this.doc.unsubscribe();


  }

}
