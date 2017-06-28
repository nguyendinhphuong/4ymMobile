import { ToastController } from 'ionic-angular';
import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { MenuPage } from "../menu/menu";
import { Storage } from '@ionic/storage';
import { ForgotPasswordPage } from '../forgotPassword/forgotPassword';
import { RestMan }  from '../../common/restRequest';
import { SUCCESS_CODE } from '../../common/constants';



@Component({
  selector: 'login-page',
  templateUrl: 'login.html'
})
export class LoginPage {

  login: FormGroup;
  main_page: { component: any };

  constructor(
    public nav: NavController,
    public app: App,
    public restMan: RestMan,
    public storage: Storage) {
    this.main_page = { component: MenuPage };

    this.login = new FormGroup({
      user: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  doLogin(){
    // var headers = new Headers();
    // headers.append("Accept", 'application/json');
    // headers.append('Content-Type', 'application/json' );
    // let options = new RequestOptions({ headers: headers });
    console.log(this.login);
    let postParams = {
      UserName: this.login.value.user,
    	Password: this.login.value.password,
    	DomainName:"192.168.1.46"
    }

    this.restMan.sendRestReq("/api/user/login",{},postParams,(data)=>{
      console.log(data);
      if(data.ErrorCode == SUCCESS_CODE) {
        this.storage.ready().then(() => {
         this.storage.set('SessionId', data.Data[0].SessionId);
         this.storage.set("UserInfo",data.Data[0]);
        });
        this.nav.setRoot(this.main_page.component);
      } else {
        this.restMan.toastAlert("Đăng nhập thất bại." + data.ErrorMessage);
      }
    },(error) => {
      this.restMan.toastAlert("Đăng nhập thất bại." + error);
      console.log(error);
    },null,);

// {"ErrorCode":"000000","ErrorMessage":null,"Total":1,"Data":[{"SessionId":"672b122c6b164b87a1f34714fb8ff752","UserType":null,"UserStatus":null,"UserName":"admin","ID":"593fc9e7b26e2147bcbb5821","DomainName":"192.168.1.46"}]}
    // this.http.post("/api/user/login", postParams, options)
    //   .subscribe(data => {
    //     console.log(data['_body']);
    //    }, error => {
    //     console.log(error);// Error getting the data
    //   });
    // console.log(this.login.value);
    // this.nav.setRoot(this.main_page.component);
  }

  // goToSignup() {
  //   this.nav.push(SignupPage);
  // }

  goToForgotPassword() {
    this.app.getRootNav().push(ForgotPasswordPage);
  }

}
