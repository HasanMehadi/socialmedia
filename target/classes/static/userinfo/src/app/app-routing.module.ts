import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignupComponent} from "./signup/signup.component";
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./auth.guard";
import {DashBoardComponent} from "./dash-board/dash-board.component";
import {UserPanelComponent} from "./user-panel/user-panel.component";
import {StatusComponent} from "./status/status.component";


const routes: Routes = [

  {
    path: 'edit/:id',
    component: UserPanelComponent,canActivate:[AuthGuard],
    data: {
      title: ' '
    }
  },{
    path: '',
    component: DashBoardComponent,
    data: {
      title: ''
    }
  },{
    path: 'signUp',
    component: SignupComponent,
    data: {
      title: 'Sign Up'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: ''
    },
  },
  {
    path: 'status',
    component: StatusComponent, canActivate:[AuthGuard],
    data: {
      title: ''
    },
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
