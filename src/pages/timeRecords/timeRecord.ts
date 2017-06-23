import { Component } from "@angular/core";

@Component({
  selector: 'timeRecord-page',
  templateUrl: 'timeRecord.html'
})
export class TimeRecordPage {
  tabs: string;
  selectedMonth: string;
  selectedStaff: string;
  constructor(){
    this.tabs="tab1";
  }

  getMonths():Array<number>{
    let result = [];
    for(let m=1;m <= new Date().getMonth()+1;m++){
      result.push(m);
    }
    return result;
  }

  getStaffs():Array<number>{
    let result = [];
    result.push("Nguyen dinh phuong");
    return result;
  }
}
