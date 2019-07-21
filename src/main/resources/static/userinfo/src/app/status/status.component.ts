import { Component, OnInit } from '@angular/core';
import {DashBoardService} from "../dash-board/dash-board.service";
import {LocationStrategy} from "@angular/common";
import {Router} from "@angular/router";
import {LoginAuthService} from "../login/login-auth.service";
import {StatusService} from "./status.service";

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  loginUser: any = {};
  locations:any =[];
  status: any={};
  currentStatus: any;
  allStatus:any=[];
  userStatus:any=[];

  constructor(private statusService: StatusService,
              private loginAuthService: LoginAuthService,
              private router: Router,
              ) {
    this.loginAuthService.isLoggedIn();
    this.loginUser = JSON.parse(localStorage.getItem('currentUser'));
    this.currentStatus = this.loginAuthService.getStatus().subscribe((currentStatus) => {
      this.currentStatus = currentStatus;
    });

    if(this.loginUser == null){
      this.router.navigate(['login']);
    }

  }

  ngOnInit() {
    this.status= {};
    this.locations=[];
    this.getStatusByUser();
    this.getStatus();
    this.getAllLocation();
  }

  getAllLocation() {
    this.statusService.getLocations().subscribe((locations) => {
      this.locations = locations;
    })
  }

  saveStatus(){
    this.status.user = this.loginUser.id;
    this.statusService.saveStatus(this.loginUser.token, this.status).subscribe((response)=>{
      if(response != null){
        this.ngOnInit();
      }
    })
  }

  getStatus(){
    this.allStatus= [];
    this.statusService.getStatusByShow(true).subscribe((allStatus)=>{
      this.allStatus= allStatus;
    })
  }

  getStatusByUser(){
    this.statusService.getStatusByUser(this.loginUser.token, this.loginUser.id).subscribe((userStatus)=>{
      this.userStatus= userStatus;
    })
  }

  editStatus(id) {
    this.router.navigate(['edit', id]);
  }
}
