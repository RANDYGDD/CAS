import { MostrarNewsPage } from './../mostrar-news/mostrar-news';
import { PerfilPage } from './../perfil/perfil';
import { Component } from '@angular/core';
import { NavController,ModalController, LoadingController } from 'ionic-angular';
import { NotificacionesPage } from '../notificaciones/notificaciones';
import { NoticiasProvider } from './../../providers/noticias/noticias';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController,
              public _news:NoticiasProvider,
              public loadingCtrl:LoadingController
            )  
  {

    this.Noticias();

  }


  Noticias(){

    let loading = this.loadingCtrl.create({
      content: 'Cargando....'
    });

    loading.present();

    this._news.CargarNoticias().then(()=>{
        
      loading.dismiss();
    })


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






}
