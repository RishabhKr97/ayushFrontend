import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {REGISTER_ROUTES} from "./register/register.routing";
import {DoctorVideoComponent} from "./doctor-video/doctor-video.component";
import {PatientVideoComponent} from "./patient-video/patient-video.component";
import {UserHomeComponent} from "./user-home/user-home.component";
import {UserDashboardComponent} from "./user-dashboard/user-dashboard.component";
import {USER_ROUTES} from "./user-dashboard/user.routing";
import {InstituteDashboardComponent} from "./institute-dashboard/institute-dashboard.component";
import {INSTITUTE_ROUTES} from "./institute-dashboard/institute.routes";
import {BookedComponent} from "./booked/booked.component";
const APP_ROUTES: Routes = [
  {path: '', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'register', component: RegisterComponent, children: REGISTER_ROUTES},
  {path: 'institution/video', component: DoctorVideoComponent},
  {path: 'patient/video', component: PatientVideoComponent},
  {path: 'patient/:id', component: UserDashboardComponent ,pathMatch:'prefix'},
  {path: 'patient/:id', component: UserDashboardComponent ,pathMatch:'prefix',children:USER_ROUTES},
  {path: 'patient/:id/home', component: UserHomeComponent},
  {path: 'institute/:id', component: InstituteDashboardComponent },
  {path: 'institute/:id', component: InstituteDashboardComponent,children:INSTITUTE_ROUTES },
  {path: 'booked',component:BookedComponent}




];
export const routing = RouterModule.forRoot(APP_ROUTES);
