// import { ToastController } from 'ionic-angular';
// import { LogMobile } from './models/log';
// export const RESTAPIURL = "";
//
// export interface RestInterface {
//     sendRestReq(apiName: string, header: any, query: any, onSuccess :any,onError: any, onFinally :any):void;
// }
//
// export const RestMan = {} as RestInterface;
//
// RestMan.sendRestReq = function(apiName: string, header: any, query: any, onSuccess :any,onError: any, onFinally :any) :void {
//     let log = new LogMobile("Client");
//     // let deviceId = this.device.uuid;
//     // header.RequestId = deviceId + Moment().format(LOG_DATE_FM);
//     log.Api = apiName;
//     // log.RequestID = header.RequestId;
//     // log.DeviceId = deviceId;
//     log.Header = JSON.stringify(header);
//     log.Query = JSON.stringify(query);
//     log.ReceivedTime = new Date();
//     try {
// 			HTTP.call (
// 									"POST", RESTAPIURL + apiName,
// 					        {
// 										headers: header,
// 										data:  query
// 								 	},
// 					        function (error, result) {
// 										log.ResponseTime = new Date();
// 										log.Duration = log.ResponseTime.getTime()-log.ReceivedTime.getTime();
//                     log.Response = JSON.stringify({error: error, result: result});
//                     console.log(JSON.stringify(log));
// 					          if(error) {
// 											onError(error);
// 										} else {
//                       if(result.data) {
//                         onSuccess(result);
//                       } else {
//                         this.toastAlert("Format of Response is invalid");
//                       }
// 										}
//                     if(onFinally) onFinally();
// 					        }
// 			);
// 		}catch(ex){
// 			log.ResponseTime = new Date();
// 			log.Duration = log.ResponseTime.getTime()-log.ReceivedTime.getTime();
// 			log.Response = JSON.stringify(ex);
//       console.log(JSON.stringify(log));
//       if(onFinally) onFinally();
// 		}
//
// }
