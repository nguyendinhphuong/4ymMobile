import { Component } from "@angular/core";
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { NavController, LoadingController } from 'ionic-angular';
import { RestMan } from "../../common/restRequest";
import { SUCCESS_CODE } from "../../common/constants";

@Component({
  selector: 'changePassword-page',
  templateUrl: 'changePassword.html'
})
export class ChangePasswordPage {

  changePassword: FormGroup;
  loading: any;

  constructor(
      public navCtrl: NavController,
      public restMan: RestMan,
      public loadCtrl: LoadingController
    ){

    this.changePassword = new FormGroup({
      oldPassword: new FormControl('', Validators.required),
      newPassword: new FormControl('', Validators.required)
    });
  }

  doChangePassword(){
    let params = {
      OldPassword: this.changePassword.value.oldPassword,
      NewPassword: this.changePassword.value.newPassword
    }
    this.loading = this.loadCtrl.create();
    this.loading.present();
    this.restMan.sendRestReq('/api/user/changePassword',
    {},
    params,
    (data) => {
      if(data.ErrorCode==SUCCESS_CODE) {
        this.restMan.toastAlert("Đổi mật khẩu thành công");
      } else {
        this.restMan.toastAlert("Đổi mật khẩu thành thất bại." + data.ErrorCode);
      }
    },
    (error) => {
      this.restMan.toastAlert("Đổi mật khẩu thành thất bại." + error);
    },
    ()=>{
      this.loading.dismiss();
    },true
    )
  }


  close(){
    this.navCtrl.pop();
  }

}
