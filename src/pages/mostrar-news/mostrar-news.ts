import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-mostrar-news',
  templateUrl: 'mostrar-news.html',
})
export class MostrarNewsPage {

  news:any[]=[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
     this.news=this.navParams.data
  }

}
