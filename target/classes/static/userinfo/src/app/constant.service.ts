import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantService {

  mainUrl = "http://localhost:8080/";
  response:any;
  currentStatus: any;
  passTrigger:boolean = false;
  constructor() {

    this.passTrigger = false;
  }


}
