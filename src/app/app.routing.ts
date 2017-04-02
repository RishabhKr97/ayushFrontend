import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {REGISTER_ROUTES} from "./register/register.routing";
import {DoctorVideoComponent} from "./doctor-video/doctor-video.component";
import {PatientVideoComponent} from "./patient-video/patient-video.component";
import {UserHomeComponent} from "./user-home/user-home.component";
import {UserUpcomingComponent} from "./user-upcoming/user-upcoming.component";
import {UserHistoryComponent} from "./user-history/user-history.component";
import {UserProfileComponent} from "./user-profile/user-profile.component";
import {UserReportsComponent} from "./user-reports/user-reports.component";
import {SEARCH_ROUTES} from "./user-home/user.routes";
const APP_ROUTES: Routes = [
  {path: '', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'register', component: RegisterComponent, children: REGISTER_ROUTES},
  {path: 'institution/video', component: DoctorVideoComponent},
  {path: 'patient/:id/video', component: PatientVideoComponent},
  {path: 'patient/:id/home', component: UserHomeComponent},
  {path: 'patient/:id/home', component: UserHomeComponent,children:SEARCH_ROUTES},
  {path: 'patient/:id/upcoming', component: UserUpcomingComponent},
  {path: 'patient/:id/history', component: UserHistoryComponent},
  {path: 'patient/:id/profile', component: UserProfileComponent},
  {path: 'patient/:id/reports', component: UserReportsComponent},


];
export const routing = RouterModule.forRoot(APP_ROUTES);
