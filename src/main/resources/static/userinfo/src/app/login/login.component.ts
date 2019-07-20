import { NgModule } from '@angular/core';
import {Component, OnInit} from '@angular/core';
import {LoginService} from "./login.service";
import {Router} from "@angular/router";
import { LoginAuthService } from "../login/login-auth.service";
import {ConstantService} from "../constant.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any;
  logedUser: any = {};

  constructor(private loginService: LoginService ,
              private router: Router,
              private loginAuthService :LoginAuthService,
              private constant: ConstantService) {

    this.user= {};
    this.loginAuthService.isLoggedIn();
  }

  ngOnInit() {

    this.logedUser = JSON.parse(localStorage.getItem('currentUser'));
    if(this.logedUser != null){
      this.router.navigate(['status']);
    }
  }

  public loginUser(loginForm: any) {

    this.loginService.loginUser(this.user).subscribe((response)=>{

      this.constant.response= response;

      if(this.constant.response !=null){
        if(this.constant.response.token){
           localStorage.setItem('currentUser',JSON.stringify(response));
           this.router.navigate(['status']);
        }
      }
    }, error=>{

    });
  }
}
