import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {REGISTER_ROUTES} from "./register/register.routing";
const APP_ROUTES: Routes = [
  {path: '', component: LoginComponent},
  {path: 'register',component:RegisterComponent},
  {path: 'register',component:RegisterComponent,children:REGISTER_ROUTES},



];
export const routing=RouterModule.forRoot(APP_ROUTES);
