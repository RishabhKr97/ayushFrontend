import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {REGISTER_ROUTES} from "./register/register.routing";
import {DoctorVideoComponent} from "./doctor-video/doctor-video.component";
import {PatientVideoComponent} from "./patient-video/patient-video.component";
const APP_ROUTES: Routes = [
  {path: '', component: LoginComponent},
  {path: 'register',component:RegisterComponent},
  {path: 'register',component:RegisterComponent,children:REGISTER_ROUTES},
  {path:'institution/video',component:DoctorVideoComponent},
  {path:'patient/video',component:PatientVideoComponent}



];
export const routing=RouterModule.forRoot(APP_ROUTES);
