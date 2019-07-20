import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {ConstantService} from "./constant.service";
import {LoginAuthService} from "./login/login-auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'USERINFO';

  check: boolean;
  loginUser: any = {};
  constructor( private loginAuthService: LoginAuthService ,
               private router: Router,
               private constant: ConstantService){

      this.constant.currentStatus = this.loginAuthService.getStatus().subscribe( (currentStatus)=>{
      this.constant.currentStatus = currentStatus;
    });



  }

  ngOnInit(): void {
    this.loginUser = JSON.parse(localStorage.getItem('currentUser'));

    if(this.loginUser != null){
      this.check = true;
    }else {
      this.check = false;
    }
  }

  logOut() {
    localStorage.removeItem('currentUser');
    this.check=true;
    this.router.navigate(['']);
  }

  logIn(){
    this.router.navigate(['login']);
  }

  signUp(){
    this.router.navigate(['signUp']);
  }
}
