import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { InstituteComponent } from './institute/institute.component';
import { ListComponent } from './institute/list/list.component';
import {LocFilterPipe, NameFilterPipe} from "./institute/list/filter.pipe";
import { SearchPipesPipe } from './institute/list/search-pipes.pipe';
import { FormInstituteComponent } from './institute/form-institute/form-institute.component';

@NgModule({
  declarations: [
    AppComponent,
    InstituteComponent,
    ListComponent,
    NameFilterPipe , LocFilterPipe, SearchPipesPipe, FormInstituteComponent

],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
