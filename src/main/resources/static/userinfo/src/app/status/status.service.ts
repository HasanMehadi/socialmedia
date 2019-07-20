import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {ConstantService} from "../constant.service";

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  constructor(private http: HttpClient, private constantService:ConstantService) {
    this.http = http;
  }

  headers =new HttpHeaders({'Access-Control-Allow-Origin':'*'});

  getLocations():Observable<any>{

    return this.http.get(this.constantService.mainUrl+'location',{headers:this.headers});

  }

  getStatusByShow( show:boolean){

   // const headers = new HttpHeaders({'Authorization': 'Bearer '+token});
    return this.http.get(this.constantService.mainUrl+'status/show',{headers: this.headers, params: {show: show.toString()}});
  }

  getStatusByUser(token:any, id:number){

    const headers = new HttpHeaders({'Authorization': 'Bearer '+token});
    return this.http.get(this.constantService.mainUrl+'status/user',{headers: headers, params: {id: id.toString()}});
  }

  saveStatus(token:any, status:any){
    const headers = new HttpHeaders({'Authorization': 'Bearer '+token});
    return this.http.post(this.constantService.mainUrl+'status/save',status,{headers: headers});
  }
}
