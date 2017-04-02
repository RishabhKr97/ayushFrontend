import { Component, OnInit } from '@angular/core';
import {Dcs} from "./dcs";

@Component({
  selector: 'app-search3',
  templateUrl: './search3.component.html',
  styleUrls: ['./search3.component.css']
})
export class Search3Component implements OnInit {
  flag1=false;
  flag2=false;
  flag3=false;
  flag4=false;
  flag5=false;
  dcsArray:Dcs[]=[
    { name:'Abc',
      institutionName:'A Institute',
      rating: 5,
      type:'C',
      id:'a01',
      department:['Yoga'],
      location:{
        address:'1,abc',
        state: 'Delhi',
        city: 'New Delhi',
        pin_code: 110001
      }
    },
    { name:'xyz',
      institutionName:'B Institute',
      rating: 3,
      type:'D',
      id:'a01',
      department:['Ayush'],
      location:{
        address:'2,cslkds',
        state: 'Delhi',
        city: 'New Delhi',
        pin_code: 110001
      }
    }
];
  constructor() { }

  ngOnInit() {
  }
  onFlip1(){

  }
  onFlip2(){

  }
  onFlip3(){

  }
  onFlip4(){

  }
  onFlip5(){

  }

}
