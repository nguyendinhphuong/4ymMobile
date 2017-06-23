import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { PreloadImage } from '../components/preload-image/preload-image';
import { ShowHideContainer } from '../components/show-hide-password/show-hide-container';
import { ShowHideInput } from '../components/show-hide-password/show-hide-input';

import { HomePage } from '../pages/home/home';
import { MenuPage } from '../pages/menu/menu';

import { EquipmentPage } from '../pages/equipments/equipment';
import { FeedbackPage } from '../pages/feedback/feedback';
import { MemberPage } from '../pages/members/member';
import { SalePage } from '../pages/sale/sale';
import { TimeRecordPage } from '../pages/timeRecords/timeRecord';
import { ForgotPasswordPage } from '../pages/forgotPassword/forgotPassword';
import { ResetPasswordPage } from '../pages/forgotPassword/resetPassword';
import { ViewMemberPage } from '../pages/members/viewMember';
import { ViewBillPage } from '../pages/sale/viewBill';

import { ChartsModule } from 'ng2-charts';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    ShowHideContainer,
    ShowHideInput,
    PreloadImage,
    HomePage,
    MenuPage,
    EquipmentPage,
    FeedbackPage,
    MemberPage,
    SalePage,
    TimeRecordPage,
    ForgotPasswordPage,
    ResetPasswordPage,
    ViewMemberPage,
    ViewBillPage
  ],
  imports: [
    ChartsModule,
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    MenuPage,
    EquipmentPage,
    FeedbackPage,
    MemberPage,
    SalePage,
    TimeRecordPage,
    ForgotPasswordPage,
    ResetPasswordPage,
    ViewMemberPage,
    ViewBillPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
