import { NotePadProvider } from './../../providers/note-pad/note-pad';
import { Component } from '@angular/core';
import { NavParams, ViewController, ActionSheetController  } from 'ionic-angular';



@Component({
  selector: 'page-notas',
  templateUrl: 'notas.html',
})
export class NotasPage {

  tipo:string;

  constructor(public navParams: NavParams,
              public ViewCtrl:ViewController,
              public _notepad:NotePadProvider,
              public actionSheetCtrl: ActionSheetController
  ) {


    this.tipo=this.ViewCtrl.data.data;
    


    this._notepad.CargarStorage();
  }



 public accion(id:number) {



    const actionSheet = this.actionSheetCtrl.create({
      title: 'Acción sobre la Nota',
      buttons: [
        {
          text: 'Eliminar',
          role: 'destructive',
          handler: () => {
            this._notepad.eliminar(id,this.tipo);
          }
        },{
          text: 'Editar',
          handler: () => {
            console.log('Archive clicked');
          }
        },{
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  
  cerrar(){
    this.ViewCtrl.dismiss();
  }






}
