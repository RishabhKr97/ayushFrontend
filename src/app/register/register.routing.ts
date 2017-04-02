import {Routes} from "@angular/router";
import {PatientRegisterComponent} from "../patient-register/patient-register.component";
import {InstituteRegisterComponent} from "../institute-register/institute-register.component";
export const REGISTER_ROUTES:Routes=[
  {path:'institution',component:InstituteRegisterComponent},
  {path:'patient',component:PatientRegisterComponent}

];
