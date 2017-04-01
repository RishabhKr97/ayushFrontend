import { Component, OnInit } from '@angular/core';
import {Dcs} from "./dcs";

@Component({
  selector: 'app-search3',
  templateUrl: './search3.component.html',
  styleUrls: ['./search3.component.css']
})
export class Search3Component implements OnInit {

  dcsArray:Dcs[]=[
    { institutionName:'A Institute',
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
    { institutionName:'B Institute',
      rating: 3,
      type:'D',
      id:'a01',
      department:[1],
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

}
