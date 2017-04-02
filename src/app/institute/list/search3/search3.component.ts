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
    { name:'Blood test',
      institutionName:'Green Leaf Ayurveda Institute',
      rating: 5,
      type:'D',
      id:'a01',
      department:['Ayurveda','Yoga'],
      location:{
        address:'A-51/60, Model Town',
        state: 'Delhi',
        city: 'New Delhi',
        pin_code: 110001
      }
    },
    { name:'Cholestrol Test',
      institutionName:'Green Leaf Ayurveda Institute',
      rating: 5,
      type:'D',
      id:'a01',
      department:['Ayurveda','Yoga'],
      location:{
        address:'A-51/60, Model Town',
        state: 'Delhi',
        city: 'New Delhi',
        pin_code: 110001
      }
    },
    { name: 'X-Ray test',
      institutionName:'Oriental Healthcare',
      rating: 3,
      type:'D',
      id:'a01',
      department:['Homeopathy'],
      location:{
        address:'4/20, Virat Market',
        state: 'Tamil Nadu',
        city: 'Chennai',
        pin_code: 64665
      }
    },
    { name: 'Eye test',
      institutionName:'Health 100 Institute',
      rating: 3,
      type:'C',
      id:'a21',
      department:['Homeopathy'],
      location:{
        address:'A3-21, sector 13',
        state: 'Faridabad',
        city: 'Uttar Pradesh',
        pin_code: 897456
      }
    }

];
  constructor() { }
  ngOnInit() {
  }
}
