import { Component } from "@angular/core";
import { NavController, LoadingController } from "ionic-angular";
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { ResetPasswordPage } from "./resetPassword";
import { RestMan } from "../../common/restRequest";
import { SUCCESS_CODE } from "../../common/constants";


@Component({
  selector: 'forgotPassword-page',
  templateUrl: 'forgotPassword.html'
})
export class ForgotPasswordPage {
  loading: any;
  fgp: FormGroup;

  constructor(
    public nav:NavController,
    public loadCtrl: LoadingController,
    public restMan: RestMan
  ){

    this.fgp = new FormGroup({
      email: new FormControl('', Validators.required)
    });
  }

  doReset(){
    let params = {
      Email: this.fgp.value.email,
      DomainName: "192.168.1.46"
    }
    this.loading = this.loadCtrl.create();
    this.loading.present();
    this.restMan.sendRestReq('/api/user/resetpassword',
    {},
    params,
    (data) => {
      if(data.ErrorCode==SUCCESS_CODE) {
        this.restMan.toastAlert("Yêu cầu đặt lại mật khẩu thành công");
        this.nav.push(ResetPasswordPage, {params: params});
      } else {
        this.restMan.toastAlert("Yêu cầu đặt lại mật khẩu thất bại." + data.ErrorCode);
      }
    },
    (error) => {
      this.restMan.toastAlert("Yêu cầu đặt lại mật khẩu thất bại." + error);
    },
    ()=>{
      this.loading.dismiss();
    },false
    )

  }

}
