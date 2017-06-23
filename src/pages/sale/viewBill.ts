import { Component } from "@angular/core";
import { ViewController } from 'ionic-angular';


@Component({
  selector: 'viewBill-page',
  templateUrl: 'viewBill.html'
})
export class ViewBillPage {

  constructor(public viewCtrl: ViewController){

  }

  dismiss() {
   this.viewCtrl.dismiss();
  }

}
