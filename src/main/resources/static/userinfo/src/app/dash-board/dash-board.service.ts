import { Injectable } from '@angular/core';
import {ConstantService} from "../constant.service";
import {Router} from "@angular/router";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class DashBoardService {

  headers =new HttpHeaders({'Access-Control-Allow-Origin':'*'});

  constructor(private router: Router, private constantService: ConstantService, private http: HttpClient) {

    this.http = http;
  }


  getStatusByShow( show:boolean){

    // const headers = new HttpHeaders({'Authorization': 'Bearer '+token});
    return this.http.get(this.constantService.mainUrl+'status/show',{headers: this.headers, params: {show: show.toString()}});
  }

}
