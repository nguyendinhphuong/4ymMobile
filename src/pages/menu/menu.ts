import { Component, ViewChild } from "@angular/core";
import { NavController, MenuController, Nav } from "ionic-angular";
import { HomePage } from "../home/home";
import { LoginPage } from "../login/login";

@Component({
  selector: 'menu-page',
  templateUrl: 'menu.html'
})
export class MenuPage {
 @ViewChild(Nav) nav: Nav;

 rootPage: any;

 constructor(
   public navCtrl: NavController,
   public menu: MenuController
 ){
   this.rootPage = HomePage;
 }

 doLogout(){
   this.menu.close();
   this.nav.setRoot(LoginPage);
 }

 goHome(){
   this.menu.close();
   this.nav.setRoot(HomePage);
 }
}
