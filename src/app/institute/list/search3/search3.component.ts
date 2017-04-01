import { Component, OnInit } from '@angular/core';
import {Dcs} from "./dcs";

@Component({
  selector: 'app-search3',
  templateUrl: './search3.component.html',
  styleUrls: ['./search3.component.css']
})
export class Search3Component implements OnInit {

  searchDCS: string='';

  flag1:boolean=false;
  flag2:boolean=false;
  flag3:boolean=false;
  flag4:boolean=false;
  flag0:boolean=false;

  f0():void{
    this.flag0=!this.flag0;
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


  dcsArray:Dcs[]=[
    { name:'X-ray',
      institutionName:'A Institute',
      rating: 5,
      type:'C',
      id:'a01',
      department:['Ayurveda','Yoga'],
      location:{
        address:'1,abc',
        state: 'Delhi',
        city: 'New Delhi',
        pin_code: 110001
      }
    },
    { name: 'Blood Test',
      institutionName:'B Institute',
      rating: 3,
      type:'D',
      id:'a01',
      department:['Homeopathy'],
      location:{
        address:'2,asdv',
        state: 'Delhi',
        city: 'New Delhi',
        pin_code: 110001
      }
    }
];
  constructor() { }
  ngOnInit() {
  }
}
