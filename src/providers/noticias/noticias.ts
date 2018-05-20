import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';




@Injectable()
export class NoticiasProvider {

  public noticias:any[]=[];

  constructor(public http: HttpClient) {
    
  }


  CargarNoticias(){

  
  let promesa = new Promise((resolve,reject)=>{

     this.http.get("https://jsonplaceholder.typicode.com/posts")
              .subscribe((data:any)=>{ 
                  this.noticias=data;
                  resolve();
              })

  });

  return promesa;

}

}
