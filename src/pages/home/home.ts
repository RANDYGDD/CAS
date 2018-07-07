import { MostrarNewsPage } from './../mostrar-news/mostrar-news';
import { PerfilPage } from './../perfil/perfil';
import { Component } from '@angular/core';
import { NavController,ModalController, LoadingController } from 'ionic-angular';
import { NotificacionesPage } from '../notificaciones/notificaciones';
import { NoticiasProvider } from './../../providers/noticias/noticias';
import { RedesProvider } from './../../providers/redes/redes';

import { Refresher} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController,
              public _news:NoticiasProvider,
              public loadingCtrl:LoadingController,
              public _red:RedesProvider
            )  
  {

    
    this._red.EstatusNetwork();
    this.Noticias();

  }


  Noticias(){

    // let loading = this.loadingCtrl.create({
    //   content: 'Cargando....'
    // });

    //     loading.present();

    this._news.CargarNoticias()
    .then(()=>{  
      //  loading.dismiss();
      
      })
      .catch(() => {
      //  loading.dismiss();
    });  
  }

  MostrarNoticias(news:any){

    this.navCtrl.push(MostrarNewsPage,news);

  }



perfil() {
      this.modalCtrl.create(PerfilPage).present();
  }  

  notificacion(){
    this.modalCtrl.create(NotificacionesPage).present();
  }


  doRefresh(refresher:Refresher) {

    this._news.CargarNoticias().then(()=>{
        
             refresher.complete();
    });
 
  }


}