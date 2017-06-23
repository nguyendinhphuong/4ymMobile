import { Component } from "@angular/core";
import { ModalController } from "ionic-angular";
import { ViewBillPage } from "./viewBill";

@Component({
  selector: 'sale-page',
  templateUrl: 'sale.html'
})
export class SalePage {
  tabs: string;
  chart: any;

  // Doughnut
  public doughnutChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData:number[] = [350, 450, 100];
  public doughnutChartType:string = 'doughnut';

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }


  constructor(public mdl: ModalController){
    this.tabs="tab1";
  }


  viewBill(){
    let modal = this.mdl.create(ViewBillPage);
    modal.present();
  }
}
