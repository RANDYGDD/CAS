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


  verificarUsuario(clave:string, contrasena:string){

    clave= clave.toLocaleLowerCase();
    return new Promise( (resolve,reject) =>{
      
     this.doc= this.afDB.doc(`/usuarios/${ clave }`)
          .valueChanges().subscribe((data:any)=>{
               
             if(data){
              
                if(data.password == contrasena){

                       
                 this.clave = clave;
                 this.user = data;

                 this.guardarStorage();
                 resolve(true);

                }else{
                  resolve(false);
                } 
           
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
            this.storage.set('usuario',this.user);    

    }else{
        //Escritorio
        localStorage.setItem('clave',this.clave);
        localStorage.setItem('usuario',JSON.stringify(this.user));
      

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

        this.storage.get('usuario').then(val=>{

          if(val){
            this.user=val;
            resolve(true);
          }else{
            resolve(false);
          }

        });      

      }else{
        //Escritorio
         if(localStorage.getItem('clave')){
           this.clave=localStorage.getItem('clave');
           resolve(true);
         }else{
           resolve(false);
         }

         if(localStorage.getItem('usuario')){
          this.user=JSON.parse(localStorage.getItem('usuario'));
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


  }

}
