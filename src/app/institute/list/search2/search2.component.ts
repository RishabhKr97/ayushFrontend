import { Component, OnInit } from '@angular/core';
import {Doctor} from "./doctor"

@Component({
  selector: 'app-search2',
  templateUrl: './search2.component.html',
  styleUrls: ['./search2.component.css']
})
export class Search2Component implements OnInit {
  searchDrName: string='';
  searchDep: string='';
  DFlags:boolean[] = [false,false,false,false,false];
  f(a:number):void{
    this.DFlags[a]=!this.DFlags[a];
    this.searchDrName='';
    console.log("inverted!"+this.DFlags+"  " +this.searchDrName)
  }

    doctorsArray: Doctor[]=[
    {
      id:'dra1',
      drName: 'H G',
      fee: 123,
      speciality:'Kidney',
      department:'Ayurveda',
      location: {
        address:'1,abc',
        state: 'Delhi',
        city: 'New Delhi',
        pin_code: 110001
      },
      instituteName: "A Institute"
    },
    {
      id:'drb2',
      drName: "A V",
      fee: 321,
      speciality:"Liver",
      department:"Homeopathy",
      location: {
        address:'3,adsv',
        state: 'Karnataka',
        city: 'Bangalore',
        pin_code: 64665
      },
      instituteName: "B Institute"
    }
  ];


  constructor() { }

  ngOnInit() {
  }

}
