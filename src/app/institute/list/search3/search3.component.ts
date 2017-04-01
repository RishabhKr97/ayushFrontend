import { Component, OnInit } from '@angular/core';
import {Dcs} from "./dcs";

@Component({
  selector: 'app-search3',
  templateUrl: './search3.component.html',
  styleUrls: ['./search3.component.css']
})
export class Search3Component implements OnInit {

  searchT: string='';
  Dname:string='';
  g(a:number):void{
    let arr:string[]=['Ayurveda','Yoga','Unnani','Siddha','Homeopathy'];
    if(this.Dname===arr[a])
      this.Dname='';
    else
      this.Dname=arr[a];
    console.log(this.Dname);
  }

  d(n:number):string{
    if(n===0)
      return'Ayurveda';
    if(n===1)
      return'Yoga';
    if(n===2)
      return'Unnani';
    if(n===3)
      return'Siddha';
    if(n===4)
      return'Homeopathy';
  }

  dcsArray:Dcs[]=[
    { name:'X-ray',
      institutionName:'A Institute',
      rating: 5,
      type:'C',
      id:'a01',
      department:[1],
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
      department:[1],
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
