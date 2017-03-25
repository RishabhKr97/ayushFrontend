import { Component, OnInit } from '@angular/core';
import {IInstitute} from "../institute.interface";
import {ListComponent} from "../list/list.component";
@Component({
  selector: 'app-form-institute',
  templateUrl: './form-institute.component.html',
  styleUrls: ['./form-institute.component.css']
})
export class FormInstituteComponent implements OnInit {

  newInstitute: IInstitute;

  nameEntered: string;
  locEntered: string;
  specEntered: string;
  dEntered: string[];


  onSubmitPushInsti(): void{

    //TODO: via service
    //ListComponent.institute.push(this.newInstitute);
  }

  constructor() { }

  ngOnInit() {
  }

}
