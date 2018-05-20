import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  constructor(public viewCtrl:ViewController) {
  }


  cerrar(){
      this.viewCtrl.dismiss();
  }



}
