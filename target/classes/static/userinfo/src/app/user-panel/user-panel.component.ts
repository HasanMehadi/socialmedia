import {Component, ElementRef, HostListener, OnInit} from '@angular/core';
import {LoginAuthService} from "../login/login-auth.service";
import {ActivatedRoute, Router} from '@angular/router';

import {UserPanelService} from "./user-panel.service";

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {

  id:any;
  status: any={};
  status2: any={};
  loginUser :any={};
  locations:any =[];
  upStatus:any={};

  constructor( private userPanelService:UserPanelService,
               private router: Router,
               private route: ActivatedRoute,
               private loginAuthService :LoginAuthService,
               private el: ElementRef) {
    this.loginUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.status= {};
    this.id = this.route.snapshot.params.id;
    this.getStatusById(this.id);
    this.getAllLocation();
  }

  @HostListener('submit', ['$event'])
  onFormSubmit() {
    const invalidElements = this.el.nativeElement.querySelectorAll('.ng-invalid');
    if (invalidElements.length > 0) {
      invalidElements[1].focus();
    } else {

    }
  }

  getStatusById(id:any){
    this.userPanelService.getStatusById(this.loginUser.token, id).subscribe((userStatus)=>{

      this.upStatus= userStatus;
      this.status ={
        id :this.upStatus.id,
        statuses:this.upStatus.statuses,
        location:this.upStatus.location.location_id,
        enabled: this.upStatus.enabled
      };

      this.status2 = this.status;

    })
  }

  getAllLocation() {
    this.userPanelService.getLocations().subscribe((locations) => {

      this.locations = locations;
    })
  }

  updateStatus(){
    this.status.user = this.loginUser.id;
    if(this.status.id == this.status2.id &&
      this.status.statuses == this.status2.statuses &&
      this.status.enabled ==this.status2.enabled &&
      this.status.location == this.status2.location){

      console.log("nothing has changed");
    }else {
      this.userPanelService.saveStatus(this.loginUser.token, this.status).subscribe((response)=>{
        if(response != null){
          this.ngOnInit();
        }
      })
    }
  }

  cancelUpdate(){
    this.router.navigate(['status'])
  }

}
