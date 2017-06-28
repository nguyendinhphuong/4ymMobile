import { Component } from "@angular/core";
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { NavParams, NavController, LoadingController } from "ionic-angular";
import { RestMan } from "../../common/restRequest";
import { SUCCESS_CODE } from "../../common/constants";
import { Storage } from "@ionic/storage";

@Component({
  selector: 'editProfile-page',
  templateUrl: 'editProfile.html'
})
export class EditProfilePage {

  profile: FormGroup;
  genderValue: String;
  userInfo: any;
  loading: any;

  constructor(
    public navParams: NavParams,
    public navCtrl: NavController,
    public restMan: RestMan,
    public storage: Storage,
    public loadCtrl: LoadingController
  ){
    this.userInfo = this.navParams.get("userInfo");
    this.genderValue = this.userInfo.Gender;
    this.profile = new FormGroup({
      address: new FormControl(this.userInfo.Address, Validators.required),
      email: new FormControl(this.userInfo.Email, Validators.required),
      fullName: new FormControl(this.userInfo.FullName, Validators.required),
      mobile: new FormControl(this.userInfo.PhoneNumber, Validators.required),
      gender: new FormControl(this.userInfo.Gender, Validators.required)
    });
  }

  doUpdate(){
    let params = {
      PhoneNumber: this.profile.value.mobile,
      FullName: this.profile.value.fullName,
      Email: this.profile.value.email,
      Address: this.profile.value.address,
      Gender: this.genderValue,
      UserId: this.userInfo.UserId
    }
    this.loading = this.loadCtrl.create();
    this.loading.present();
    this.restMan.sendRestReq('/api/user/updateProfile',
    {},
    params,
    (data) => {
      if(data.ErrorCode==SUCCESS_CODE) {
        this.restMan.toastAlert("Cập nhật thành công");
        this.updateLocalStorage();
      } else {
        this.restMan.toastAlert("Cập nhật lỗi." + data.ErrorMessage);
      }
    },
    (error) => {
      this.restMan.toastAlert("Không lấy được dữ liệu." + error);
    },
    ()=>{
      this.loading.dismiss();
    },true
    )

  }

  close(){
    this.navCtrl.pop();
  }

  updateLocalStorage(){
    this.userInfo.Address = this.profile.value.address;
    this.userInfo.Email = this.profile.value.email;
    this.userInfo.FullName = this.profile.value.fullName;
    this.userInfo.PhoneNumber = this.profile.value.mobile;
    this.userInfo.Gender = this.genderValue;
    this.storage.ready().then(()=>{
      this.storage.set("UserInfo",this.userInfo);
    })
  }

}
