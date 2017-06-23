import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

import { EquipmentPage } from '../equipments/equipment';
import { FeedbackPage } from '../feedback/feedback';
import { MemberPage } from '../members/member';
import { SalePage } from '../sale/sale';
import { TimeRecordPage } from '../timeRecords/timeRecord';

@Component({
  selector: 'home-page',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl:NavController
  ) {

  }

  openMember(){
    this.navCtrl.push(MemberPage);
  }

  openFeedback(){
    this.navCtrl.push(FeedbackPage);
  }

  openEquip(){
    this.navCtrl.push(EquipmentPage);
  }

  openSale(){
    this.navCtrl.push(SalePage);
  }

  openTimeRecord(){
    this.navCtrl.push(TimeRecordPage);
  }

}
