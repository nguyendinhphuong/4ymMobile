import { Component, ViewChild } from "@angular/core";
import { NavController, MenuController, Nav } from "ionic-angular";
import { HomePage } from "../home/home";
import { LoginPage } from "../login/login";
import { Storage } from "@ionic/storage";
import { ChangePasswordPage } from "../profile/changePassword";
import { EditProfilePage } from "../profile/editProfile";
import { RestMan } from "../../common/restRequest";

@Component({
  selector: 'menu-page',
  templateUrl: 'menu.html'
})
export class MenuPage {
 @ViewChild(Nav) nav: Nav;
 userInfo:any;
 rootPage: any;

 constructor(
   public navCtrl: NavController,
   public menu: MenuController,
   public storage: Storage,
   public restMan: RestMan
 ){
   this.rootPage = HomePage;
   this.updateUserInfo();
 }



 async updateUserInfo(){
   await this.storage.ready().then(()=>{
     this.storage.get("UserInfo").then((userInfo)=>{
       this.userInfo =  userInfo;
     })
   })
 }

 async getUserInfo(){
   await this.storage.ready().then(()=>{
     this.storage.get("UserInfo").then((userInfo)=>{
       return userInfo;
     })
   })
 }

 doLogout(){
   this.menu.close();
   this.restMan.sendRestReq('/api/user/logout',{},{},()=>{},()=>{},null,true);
   this.nav.setRoot(LoginPage);
 }

 goHome(){
   this.menu.close();
   this.nav.setRoot(HomePage);
 }

 updateProfile(){
   this.storage.ready().then(()=>{
     this.storage.get("UserInfo").then((userInfo)=>{
       this.menu.close();
       this.nav.push(EditProfilePage,{ userInfo: userInfo});
     })
   })
 }

 changePassword(){
   this.menu.close();
   this.nav.push(ChangePasswordPage);
 }
}
