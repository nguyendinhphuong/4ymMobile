import { Component } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { NavController, App } from 'ionic-angular';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { MenuPage } from "../menu/menu";
import { ForgotPasswordPage } from '../forgotPassword/forgotPassword';
// import { RestMan }  from '../../common/restRequest';

@Component({
  selector: 'login-page',
  templateUrl: 'login.html'
})
export class LoginPage {

  login: FormGroup;
  main_page: { component: any };

  constructor(public nav: NavController, public app: App, public http: Http) {
    this.main_page = { component: MenuPage };

    this.login = new FormGroup({
      user: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  doLogin(){
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    let options = new RequestOptions({ headers: headers });

    let postParams = {
      UserName: "admin",
    	Password: "123456",
    	DomainName:"192.168.1.46"
    }

    this.http.post("http://192.168.1.46:8080/api/user/login", postParams, options)
      .subscribe(data => {
        console.log(data['_body']);
       }, error => {
        console.log(error);// Error getting the data
      });
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
