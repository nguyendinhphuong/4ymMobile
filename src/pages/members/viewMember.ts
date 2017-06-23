import { Component } from "@angular/core";
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'viewMember-page',
  templateUrl: 'viewMember.html'
})
export class ViewMemberPage {

  constructor(public viewCtrl: ViewController){

  }

  dismiss() {
   this.viewCtrl.dismiss();
  }

}
