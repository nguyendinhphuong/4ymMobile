export class LogMobile {
  RequestID: string;
  DeviceId: string;
  ReceivedTime: Date;
  ResponseTime: Date;
  Header: string;
  Query: string;
  Response: string;
  Duration: number;
  Type: string;
  Api: string;

  constructor(type:string){
    this.Type = type;
  }
}
