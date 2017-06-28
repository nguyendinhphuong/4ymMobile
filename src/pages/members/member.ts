import { Component } from "@angular/core";
import { ModalController } from "ionic-angular";
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { ViewMemberPage } from "./viewMember";
import { ListMember, Member } from "./member.model";
import { RestMan }  from '../../common/restRequest';
import { SUCCESS_CODE, PAGE_SIZE } from '../../common/constants';

@Component({
  selector: 'member-page',
  templateUrl: 'member.html'
})
export class MemberPage {
  tabs: string;
  selectedType: string;
  search: FormGroup;
  members: ListMember = new ListMember();
  searchResult: ListMember = new ListMember();
  pageIndex: number;
  searchPageIndex: number;

  constructor(
    public mdl: ModalController,
    public restMan: RestMan){
    this.tabs = "tab1";
    this.selectedType = "all";
    this.search = new FormGroup({
      textSearch: new FormControl('', Validators.required)
    });
    this.pageIndex = 1;
  }

  ionViewDidLoad(){
    this.queryData(3);
  }

  queryData(status:number){
    let params = {
      PageIndex: this.pageIndex,
	    PageSize: PAGE_SIZE,
      Status: status  //get all
    }
    this.restMan.sendRestReq(
      "/api/customer/All",
      {},
      params,
      (data)=>{
        if(data.ErrorCode == SUCCESS_CODE) {
          this.members.listMember.length = 0;
          this.members.total = data.Total;
          for(let member of data.Data) {
            this.members.listMember.push(new Member(member));
          }
        } else {
          this.restMan.toastAlert("Không lấy được dữ liệu." + data.ErrorMessage);
        }
      },
      (error)=>{
        this.restMan.toastAlert("Không lấy được dữ liệu." + error);
      },
      null,true
    );
  }

  searchData(){
    let params = {
      Name: this.search.value.textSearch,
      PageIndex: this.pageIndex,
	    PageSize: PAGE_SIZE,
    }
    this.restMan.sendRestReq(
      "/api/customer/Search",
      {},
      params,
      (data)=>{
        if(data.ErrorCode == SUCCESS_CODE) {
          this.searchResult.listMember.length = 0;
          this.searchResult.total = data.Total;
          for(let member of data.Data) {
            this.searchResult.listMember.push(new Member(member));
          }
        } else {
          this.restMan.toastAlert("Không lấy được dữ liệu." + data.ErrorMessage);
        }
      },
      (error)=>{

      },
      null,true
    );
  }

  hasMore():boolean{
    if(this.members.total > this.members.listMember.length) return true;
    return false;
  }

  doSearch(){
    this.searchPageIndex = 1;
    this.searchData();
  }

  hasSearchResultMore():boolean{
    if(this.searchResult.total > this.searchResult.listMember.length) return true;
    return false;
  }

  openMember(member){
    let modal = this.mdl.create(ViewMemberPage, {member : member});
    modal.present();
  }

  onSelectChange(selectedValue: any) {
    console.log('Selected', selectedValue);
    this.pageIndex = 1;
    if(selectedValue=="inactive")  this.queryData(0);
    else if(selectedValue=="active") this.queryData(1);
    else this.queryData(3);
  }

}
