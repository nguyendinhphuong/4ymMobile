import { Component } from "@angular/core";
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { NavParams, LoadingController, NavController } from "ionic-angular";
import { RestMan } from "../../common/restRequest";
import { SUCCESS_CODE } from "../../common/constants";
import { LoginPage } from "../login/login";

@Component({
  selector: 'resetPassword-page',
  templateUrl: 'resetPassword.html'
})
export class ResetPasswordPage {
  loading: any;
  resetPass: FormGroup;
  params: any;

  constructor(
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public restMan: RestMan,
    public navCtrl: NavController
  ){
    this.params = this.navParams.get("params");
    this.resetPass = new FormGroup({
      resetCode: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  setPassword(){
    let params = {
      Email: this.params.Email,
      DomainName: this.params.DomainName,
      Token: this.resetPass.value.resetCode,
      NewPassword: this.resetPass.value.password

    }
    this.loading = this.loadingCtrl.create();
    this.loading.present();
    this.restMan.sendRestReq('/api/user/setpassword',
    {},
    params,
    (data) => {
      if(data.ErrorCode==SUCCESS_CODE) {
        this.restMan.toastAlert("Đổi mật khẩu thành công");
        this.navCtrl.push(LoginPage);
      } else {
        this.restMan.toastAlert("Đổi mật khẩu thất bại." + data.ErrorCode);
      }
    },
    (error) => {
      this.restMan.toastAlert("Đổi mật khẩu thất bại." + error);
    },
    ()=>{
      this.loading.dismiss();
    },false
    )
  }

}
