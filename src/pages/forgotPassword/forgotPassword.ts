import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { ResetPasswordPage } from "./resetPassword";

@Component({
  selector: 'forgotPassword-page',
  templateUrl: 'forgotPassword.html'
})
export class ForgotPasswordPage {

  fgp: FormGroup;

  constructor(public nav:NavController){

    this.fgp = new FormGroup({
      email: new FormControl('', Validators.required)
    });
  }

  doReset(){
    this.nav.push(ResetPasswordPage);
  }

}
