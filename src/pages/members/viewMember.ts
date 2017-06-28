import { Component, NgZone } from "@angular/core";
import { ViewController, NavParams } from 'ionic-angular';
import { Member } from "./member.model";
import { Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'viewMember-page',
  templateUrl: 'viewMember.html'
})
export class ViewMemberPage {
  member: Member;
  memberInfo: FormGroup;
  genderValue: string;

  constructor(
    public viewCtrl: ViewController,
    public navParams: NavParams,
    public ngZone: NgZone
  ){
    this.member = this.navParams.get('member');
    this.genderValue = this.member.Gender;
    this.memberInfo = new FormGroup({
      name: new FormControl({value :this.member.Name}, Validators.required),
      mobile: new FormControl({value :this.member.Mobile}, Validators.required),
      address: new FormControl({value :this.member.Address}, Validators.required),
      gender: new FormControl({value :this.member.Gender}, Validators.required),
      status: new FormControl({value :this.member.Status}, Validators.required),
    });
  }

  doUpdate(){
    console.log("MemberProfile",this.memberInfo);
  }

  dismiss() {
   this.viewCtrl.dismiss();
  }

  checkGender(gender:string){
    return (gender==this.member.Gender)?true:false;
  }

  doInfinite($event){

  }

  enableUpdate(){
    this.memberInfo.enable();
  }

}
