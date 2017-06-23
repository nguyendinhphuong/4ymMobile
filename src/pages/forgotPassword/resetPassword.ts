import { Component } from "@angular/core";
import { Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'resetPassword-page',
  templateUrl: 'resetPassword.html'
})
export class ResetPasswordPage {

  resetPass: FormGroup;

  constructor(){

    this.resetPass = new FormGroup({
      resetCode: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  setPassword(){

  }

}
