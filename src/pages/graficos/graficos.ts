import { ConsultalProvider } from './../../providers/consultal/consultal';
import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';


@Component({
  selector: 'page-graficos',
  templateUrl: 'graficos.html',
})
export class GraficosPage {

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };


  
  public pieChartLabels:string[]=['ATRACO','ESTAFA','HURTO','ROBO'];
  public pieChartData:number[]=[13, 8, 14, 15];
  public pieChartType:string = 'pie';


  public barChartLabels:string[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
  public barChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Robos Vehiculos'},
    {data: [100, 150, 81, 105, 110, 108, 90], label: 'Accidentes Vehiculos'}
  ];


  public doughnutChartLabels:string[] = ['Tiroteos', 'Apresados', 'Redadas'];
  public doughnutChartData:number[] = [20, 450, 100];
  public doughnutChartType:string = 'doughnut';


  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public _estadisticas:ConsultalProvider,
              public loadingCtrl:LoadingController
            ) {


            let loading = this.loadingCtrl.create({
                content: 'Cargando....'
              });

              loading.present();

            this._estadisticas.Estadisticas().subscribe(
              
              (data:any)=>{
                   
               // console.log(data.data.label_crimen);
                //console.log(data.data.data_crimen);
                //this.pieChartLabels=data.data.label_crimen;
                this.pieChartData=data.data.data_crimen;

                loading.dismiss();
            },
          
            (error)=>{

                loading.dismiss();

            }

          );

    

  }



  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
 
  public randomize():void {
    // Only Change 3 values
    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }
 

}
