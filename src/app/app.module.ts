import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { InstituteComponent } from './institute/institute.component';
import { ListComponent } from './institute/list/list.component';
import { FormInstituteComponent } from './institute/form-institute/form-institute.component';
import {AddformService} from "./addform.service";
import { DoctorVideoComponent } from './doctor-video/doctor-video.component';
import { PatientVideoComponent } from './patient-video/patient-video.component';
import {VideoCallService} from "./video-call.service";
import {InstiNamePipe} from "./institute/list/search1/insti-name.pipe";
import {Search1Component} from "./institute/list/search1/search1.component";
import {Search2Component} from "./institute/list/search2/search2.component";
import {Search3Component} from "./institute/list/search3/search3.component";
import {DocNamePipe} from "./institute/list/search2/doc-name.pipe";
import { MessageComponent } from './message/message.component';
import {MessageService} from "./message.service";
import { DcsNamePipe } from './institute/list/search3/dcs-name.pipe';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {routing} from "./app.routing";


@NgModule({
  declarations: [
    AppComponent,
    InstituteComponent,
    ListComponent,
    Search1Component,
    Search2Component,
    Search3Component,
    FormInstituteComponent, DoctorVideoComponent, PatientVideoComponent,InstiNamePipe,DocNamePipe, MessageComponent, DcsNamePipe, LoginComponent, RegisterComponent

],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [AddformService,VideoCallService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
