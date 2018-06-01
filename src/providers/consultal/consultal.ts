import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class ConsultalProvider {

  public perfil:any[]=[];

  constructor(public http: HttpClient) {
   
  }



  CargarPerfil(){

    let promesa = new Promise((resolve,reject)=>{
  
       this.http.get("persona.json")
                .subscribe(
                  (data:any)=>{ 
                    console.log(this.perfil);
                    resolve();

                    
                },
                (error)=>{

                }
                
              )
  
    });
  
    return promesa;
  
  }

}
