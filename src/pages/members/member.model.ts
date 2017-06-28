export class Member {
  Name: string;
  Mobile: string;
  Address: string;
  Gender: string;
  ImageUrl: string;
  RegisterDate: Date;
  Status: number;
  UserId: string;

  constructor(data:any){
    this.Name = data.Name;
    this.Mobile = data.Mobile;
    this.Address = data.Address;
    this.Gender = data.Sex;
    this.ImageUrl = data.ImageUrl;
    this.RegisterDate = data.RegisterDate;
    this.Status = data.Status;
    this.UserId = data.UserId;
  };
}

export class ListMember {
  total: number;
  listMember: Array<Member> = [];
}
