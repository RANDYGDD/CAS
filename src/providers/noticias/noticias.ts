import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';




@Injectable()
export class NoticiasProvider {

  public noticias:any[]=[];

  constructor(public http: HttpClient) {
    
  }


  CargarNoticias(){

    return this.http.get("http://178.128.67.94/api/rss");
  

}

}
