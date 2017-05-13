import {Routes} from "@angular/router";
import {UserHomeComponent} from "../user-home/user-home.component";
import {SEARCH_ROUTES} from "../user-home/user.routes";
import {UserUpcomingComponent} from "../user-upcoming/user-upcoming.component";
import {UserHistoryComponent} from "../user-history/user-history.component";
import {UserProfileComponent} from "../user-profile/user-profile.component";
import {UserReportsComponent} from "../user-reports/user-reports.component";
export const USER_ROUTES:Routes=[
  {path: 'home', component: UserHomeComponent,pathMatch:'prefix'},
  {path: 'home', component: UserHomeComponent,children:SEARCH_ROUTES,pathMatch:'prefix'},
  {path: 'upcoming', component: UserUpcomingComponent},
  {path: 'history', component: UserHistoryComponent},
  {path: 'profile', component: UserProfileComponent},
  {path: 'reports', component: UserReportsComponent},

];
