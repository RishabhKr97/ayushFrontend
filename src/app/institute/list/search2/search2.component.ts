import { Component, OnInit } from '@angular/core';
import {Doctor} from "./doctor"

@Component({
  selector: 'app-search2',
  templateUrl: './search2.component.html',
  styleUrls: ['./search2.component.css']
})
export class Search2Component implements OnInit {
  searchDrName: string='';

  flag1:boolean=false;
  flag2:boolean=false;
  flag3:boolean=false;
  flag4:boolean=false;
  flag0:boolean=false;

  f0():void{

  }
  f1():void{
    this.flag1=!this.flag1;
  }
  f2():void{
    this.flag2=!this.flag2;
  }
  f3():void{
    this.flag3=!this.flag3;
  }
  f4():void{
    this.flag4=!this.flag4;
  }

    doctorsArray: Doctor[]=[
    {
      id:'dra1',
      drName: 'H G                      ',
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
      drName: "A V              ",
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
