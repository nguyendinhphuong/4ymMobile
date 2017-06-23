import { Component } from "@angular/core";
import { ModalController } from "ionic-angular";
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { ViewMemberPage } from "./viewMember";

@Component({
  selector: 'member-page',
  templateUrl: 'member.html'
})
export class MemberPage {
  tabs: string;
  selectedType: string;
  search: FormGroup;

  constructor(public mdl: ModalController){
    this.tabs = "tab1";
    this.search = new FormGroup({
      member: new FormControl('', Validators.required)
    });
  }

  doSearch(){

  }

  openMember(){
    let modal = this.mdl.create(ViewMemberPage);
    modal.present();    
  }

}
