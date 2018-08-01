import { HuellasProvider } from './../../providers/huellas/huellas';
import { BuscadosPage } from './../buscados/buscados';
import { PlacaPage } from './../placa/placa';
import { NotificacionesPage } from './../notificaciones/notificaciones';
import { PerfilPage } from './../perfil/perfil';
import { Component } from '@angular/core';
import { NavController, NavParams,ModalController } from 'ionic-angular';
import { ConsultarPage } from './../consultar/consultar';
import { AlertController } from 'ionic-angular';
import { GraficosPage } from './../graficos/graficos';


@Component({
  selector: 'page-consultas',
  templateUrl: 'consultas.html',
})
export class ConsultasPage {

  consulta=ConsultarPage;
  buscados=BuscadosPage;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public modalCtrl:ModalController,
              public alertCtrl: AlertController,
              public _huellas:HuellasProvider
            ) {
  }


perfil() {
    this.modalCtrl.create(PerfilPage).present();
}  


graficos(){

  this.navCtrl.push(GraficosPage);


  this._huellas.LeerHuella().then((result: any) => {

                      
                  }).catch((error: any) =>{
                          return false;
                  });

}


huella(){

this._huellas.LeerHuella()
.then((result: any) => {

  this.showPrompt();

}).catch((error: any) =>{
      return false;
});

}

showPrompt() {
  let prompt = this.alertCtrl.create({
    title: 'Placa Numérica o Alfanumérica',
    message: "Favor introducir los digítos de manera valida",
    inputs: [
      {
        name: 'placa',
        placeholder: 'Placa'
      },
    ],
    buttons: [
      {
        text: 'Cancelar',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Buscar',
        handler: data => {

          this.navCtrl.push(PlacaPage,{'placa':data});
        }
      }
    ]
  });
  prompt.present();
}

}
