import {Routes} from "@angular/router";
import {Search1Component} from "../institute/list/search1/search1.component";
import {Search2Component} from "../institute/list/search2/search2.component";
import {Search3Component} from "../institute/list/search3/search3.component";
export const SEARCH_ROUTES:Routes=[
  {path:'institution',component:Search1Component},
  {path:'doctor',component:Search2Component},
  {path:'speciality',component:Search3Component}

];
