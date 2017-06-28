import { ToastController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { LogMobile } from './models/log';
import { Http, Headers, RequestOptions } from '@angular/http';
export const RESTAPIURL = "http://192.168.1.46:21205";
import { Storage } from '@ionic/storage';

@Injectable()
export class RestMan {
  constructor(
    public http: Http,
    public toast: ToastController,
    public storage: Storage
  ){

  };

  sendRestReq(apiName: string, header: any, params: any, onSuccess :any,onError: any, onFinally :any,session :boolean = false) :void{
    let log = new LogMobile("Client");
    // let deviceId = this.device.uuid;
    // header.RequestId = deviceId + Moment().format(LOG_DATE_FM);
    log.Api = apiName;
    // log.RequestID = header.RequestId;
    // log.DeviceId = deviceId;
    header["Accept"] = "application/json"
    header["Content-Type"] = "application/json";
    if(session) {
      this.storage.ready().then(()=>{
        this.storage.get("SessionId").then((val)=>{
          header["SessionId"] = val;
          let options = new RequestOptions({ headers: header });
          log.Header = JSON.stringify(header);
          log.Query = JSON.stringify(params);
          log.ReceivedTime = new Date();

          this.http.post(RESTAPIURL + apiName, params, options)
            .subscribe(data => {
              log.ResponseTime = new Date();
              log.Duration = log.ResponseTime.getTime() - log.ReceivedTime.getTime();
              log.Response = JSON.stringify({data: data});
              console.log(log);
              console.log(data['_body']);
              onSuccess(JSON.parse(data['_body']));
              if(onFinally) onFinally();
             }, error => {
              log.ResponseTime = new Date();
              log.Duration = log.ResponseTime.getTime() - log.ReceivedTime.getTime();
              log.Response = JSON.stringify({data: error});
              console.log(error);// Error getting the data
              onError(error);
              if(onFinally) onFinally();
            });

        })
      })
    } else {
      let options = new RequestOptions({ headers: header });
      log.Header = JSON.stringify(header);
      log.Query = JSON.stringify(params);
      log.ReceivedTime = new Date();

      this.http.post(RESTAPIURL + apiName, params, options)
        .subscribe(data => {
          log.ResponseTime = new Date();
          log.Duration = log.ResponseTime.getTime() - log.ReceivedTime.getTime();
          log.Response = JSON.stringify({data: data});
          console.log(log);
          console.log(data['_body']);
          onSuccess(JSON.parse(data['_body']));
          if(onFinally) onFinally();
         }, error => {
          log.ResponseTime = new Date();
          log.Duration = log.ResponseTime.getTime() - log.ReceivedTime.getTime();
          log.Response = JSON.stringify({data: error});
          console.log(error);// Error getting the data
          onError(error);
          if(onFinally) onFinally();
        });
    }

  }

  toastAlert(message:string){
    let toast = this.toast.create({
      message: message,
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }

}

      // if(error) {
      //   onError(error);
      // } else {
      //   if(result.data) {
      //     onSuccess(result);
      //   } else {
      //     this.toastAlert("Format of Response is invalid");
      //   }
      // }
      // if(onFinally) onFinally();
