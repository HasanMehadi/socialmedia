import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {NgxPaginationModule} from "ngx-pagination";
import {SignupModule} from "./signup/signup/signup.module";
import {LoginModule} from "./login/login/login.module";
import {Router, RouterModule} from "@angular/router";
import {DashBoardModule} from "./dash-board/dash-board/dash-board.module";

import {StatusModule} from "./status/status/status.module";




@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    DashBoardModule,
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    SignupModule,
    LoginModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    StatusModule,
    RouterModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
