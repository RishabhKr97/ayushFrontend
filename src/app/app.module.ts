import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {InstituteComponent} from './institute/institute.component';
import {ListComponent} from './institute/list/list.component';
import {FormInstituteComponent} from './institute/form-institute/form-institute.component';
import {AddformService} from "./addform.service";
import {DoctorVideoComponent} from './doctor-video/doctor-video.component';
import {PatientVideoComponent} from './patient-video/patient-video.component';
import {VideoCallService} from "./video-call.service";
import {InstiNamePipe} from "./institute/list/search1/insti-name.pipe";
import {Search1Component} from "./institute/list/search1/search1.component";
import {Search2Component} from "./institute/list/search2/search2.component";
import {Search3Component} from "./institute/list/search3/search3.component";
import {DocNamePipe} from "./institute/list/search2/doc-name.pipe";
import {MessageComponent} from './message/message.component';
import {MessageService} from "./message.service";
import {DcsNamePipe} from './institute/list/search3/dcs-name.pipe';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {routing} from "./app.routing";
import {PatientService} from "./patient.service";
import {AppointmentService} from "./appointment.service";
import {ReceiptService} from "./receipt.service";
import {PatientRegisterService} from "./patient-register.service";
import {FormComponent} from "./forms_app.component";
import {ContactComponent} from "./contact-form.component";
import {TestComponent} from "./test/test.component";
import {AppointmentComponent} from "./appointment/appointment.component";
import {PatientRegisterComponent} from "./patient-register/patient-register.component";
import {ReceiptComponent} from "./receipt/receipt.component";
import { LogintComponent } from './logint/login.component';
import {InstituteHistoryService} from "./institute-history.service";
import {InstituteRegisterService} from "./institute-register.service";
import {InstituteHistoryComponent} from "app/institute-history/institute-history.component";
import {InstituteRegisterComponent} from "./institute-register/institute-register.component";
import {LoginService} from "./login/login.service";
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserUpcomingComponent } from './user-upcoming/user-upcoming.component';
import { UserHistoryComponent } from './user-history/user-history.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserReportsComponent } from './user-reports/user-reports.component';
import { InstituteDashboardComponent } from './institute-dashboard/institute-dashboard.component';
import { InstiHistoryComponent } from './insti-history/insti-history.component';
import { InstiProfileComponent } from './insti-profile/insti-profile.component';
import { InstiUpcomingComponent } from './insti-upcoming/insti-upcoming.component';


@NgModule({
  declarations: [
    AppComponent,
    InstituteComponent,
    ListComponent,
    Search1Component,
    Search2Component,
    Search3Component,
    FormInstituteComponent, DoctorVideoComponent, PatientVideoComponent, InstiNamePipe, DocNamePipe, MessageComponent,
    DcsNamePipe,     LoginComponent, RegisterComponent, FormComponent,
    ContactComponent,
    TestComponent,
    AppointmentComponent,
    PatientRegisterComponent,
    ReceiptComponent,
    LogintComponent,
    InstituteHistoryComponent,
    InstituteRegisterComponent,
    UserDashboardComponent,
    UserHomeComponent,
    UserUpcomingComponent,
    UserHistoryComponent,
    UserProfileComponent,
    UserReportsComponent,
    InstituteDashboardComponent,
    InstiHistoryComponent,
    InstiProfileComponent,
    InstiUpcomingComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [AddformService, VideoCallService, MessageService, PatientService, AppointmentService, ReceiptService, PatientRegisterService,InstituteHistoryService,InstituteRegisterService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
