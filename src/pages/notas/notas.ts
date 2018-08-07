import { GeneralPage } from './../general/general';
import { AccidentePage } from './../accidente/accidente';
import { NotePadProvider } from './../../providers/note-pad/note-pad';
import { Component } from '@angular/core';
import { NavParams, ViewController, ActionSheetController, NavController, ModalController } from 'ionic-angular';
import { RegistrarPage } from '../registrar/registrar';
import { RoboVehiculoPage } from '../robo-vehiculo/robo-vehiculo';
import { NotaUbicacionPage } from '../nota-ubicacion/nota-ubicacion';




@Component({
  selector: 'page-notas',
  templateUrl: 'notas.html',
})
export class NotasPage {

  tipo:string;

  constructor(public navParams: NavParams,
              public ViewCtrl:ViewController,
              public _notepad:NotePadProvider,
              public actionSheetCtrl: ActionSheetController,
              public navCtrl:NavController,
              public modalCtrl:ModalController
  ) {


    this.tipo=this.ViewCtrl.data.data;
    


    this._notepad.CargarStorage();
  }



 public accion(id:number,lat:number,lng:number) {




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
 
             switch(this.tipo){

                    case "crimen":
                          this.navCtrl.push(RegistrarPage,{"id":id});
                         break;

                   case "robo":
                           this.navCtrl.push(RoboVehiculoPage,{"id":id});     
                         break;

                  case   "general":
                            this.navCtrl.push(GeneralPage,{"id":id});  
                           break;

                  case "accidente":
                             this.navCtrl.push(AccidentePage,{"id":id});
                        break; 

             }
               
            
          }
        },{
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
           
          }
        }

        ,{
          text: 'Ubicacion',
          handler: () => {
            let modal= this.modalCtrl.create(NotaUbicacionPage,{lat:lat,lng:lng});
            modal.present();
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
