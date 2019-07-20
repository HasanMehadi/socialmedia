import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StatusComponent} from "../status.component";
import {StatusService} from "../status.service";
import {AuthGuard} from "../../auth.guard";
import {NgxPaginationModule} from "ngx-pagination";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  declarations: [StatusComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    NgxPaginationModule
  ],
  providers:[StatusService]
})
export class StatusModule { }
