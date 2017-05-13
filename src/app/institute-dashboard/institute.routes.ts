import {Routes} from "@angular/router";
import {InstiUpcomingComponent} from "../insti-upcoming/insti-upcoming.component";
import {FormInstituteComponent} from "../institute/form-institute/form-institute.component";
import {InstiProfileComponent} from "../insti-profile/insti-profile.component";
import {InstiHistoryComponent} from "../insti-history/insti-history.component";
export const INSTITUTE_ROUTES:Routes=[
  {path: 'upcoming', component: InstiUpcomingComponent},
  {path: 'history', component: InstiHistoryComponent},
  {path: 'services', component: FormInstituteComponent},
  {path: 'profile', component: InstiProfileComponent},

];
