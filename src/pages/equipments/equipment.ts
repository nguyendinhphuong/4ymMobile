import { Component } from "@angular/core";

@Component({
  selector: 'equipment-page',
  templateUrl: 'equipment.html'
})
export class EquipmentPage {
  tabs: string;

  constructor(){
    this.tabs = "tab1";
  }

  getEquip():Array<string>{
    let result=[];
    result.push("Máy tập tay");
    result.push("Máy tập chân");
    result.push("Máy tập chạy");
    return result;
  }
}
