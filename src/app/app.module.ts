import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { InstituteComponent } from './institute/institute.component';
import { ListComponent } from './institute/list/list.component';
import { FormInstituteComponent } from './institute/form-institute/form-institute.component';
import {AddformService} from "./addform.service";
import {LocFilterPipe} from "./institute/list/loc-filter.pipe";
import {NameFilterPipe} from "./institute/list/name-filter.pipe";
import {DepFilterPipe} from "./institute/list/dep-filter.pipe";
import { DrNameFilterPipe } from './institute/list/dr-name-filter.pipe';
import { Search1Component } from './institute/list/search1/search1.component';
import { Search2Component } from './institute/list/search2/search2.component';
import { Search3Component } from './institute/list/search3/search3.component';
import { InstiNamePipe } from './institute/list/search1/insti-name.pipe';
import { DocNamePipe } from './institute/list/search2/doc-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    InstituteComponent,
    ListComponent,
    NameFilterPipe , LocFilterPipe, FormInstituteComponent, DepFilterPipe, DrNameFilterPipe, Search1Component, Search2Component, Search3Component, InstiNamePipe, DocNamePipe

],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [AddformService],
  bootstrap: [AppComponent]
})
export class AppModule { }
