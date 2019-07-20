import {Component, NgModule, OnInit} from '@angular/core';
import {DashBoardService} from "./dash-board.service";
import {LoginAuthService} from "../login/login-auth.service";
import {Router} from "@angular/router";
import {LocationStrategy} from "@angular/common";
import {StatusService} from "../status/status.service";



@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  loginUser: any = {};
  currentStatus: any;
  role: any;
  allStatus:any=[];

  constructor(private dashBoardService: DashBoardService,
              private statusService: StatusService,
              private loginAuthService: LoginAuthService,
              private router: Router,
              location: LocationStrategy
  ) {

    this.loginAuthService.isLoggedIn();
    this.loginUser = JSON.parse(localStorage.getItem('currentUser'));
    this.currentStatus = this.loginAuthService.getStatus().subscribe((currentStatus) => {
      this.currentStatus = currentStatus;
    });

    /*location.onPopState(() => {
      this.pass = false;
      console.log(this.pass);
    });
    this.profile=null;*/

  }

  ngOnInit() {

    this.getStatus();
  }

  getStatus(){

    this.allStatus= [];
    this.statusService.getStatusByShow(true).subscribe((allStatus)=>{
      console.log('called get user');
      console.log(allStatus);
      this.allStatus= allStatus;
    });
  }
}
