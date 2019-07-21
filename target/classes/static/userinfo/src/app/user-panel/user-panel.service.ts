import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ConstantService} from "../constant.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserPanelService {

  headers =new HttpHeaders({'Access-Control-Allow-Origin':'*'});

  constructor(private router: Router, private constantService: ConstantService, private http: HttpClient) {

  }

  getStatusById(token:any, id:number){
    const headers = new HttpHeaders({'Authorization': 'Bearer '+token});
    return this.http.get(this.constantService.mainUrl+'status/id',{headers: headers, params: {id: id.toString()}});
  }

  getLocations():Observable<any>{

    return this.http.get(this.constantService.mainUrl+'location',{headers:this.headers});

  }

  saveStatus(token:any, status:any){
    const headers = new HttpHeaders({'Authorization': 'Bearer '+token});
    return this.http.put(this.constantService.mainUrl+'status/update',status,{headers: headers});
  }
}
