import { Component, OnInit } from '@angular/core';
import  { Institute} from './institute'
@Component({
  selector: 'app-search1',
  templateUrl: './search1.component.html',
  styleUrls: ['./search1.component.css']
})
export class Search1Component implements OnInit {
  searchName: string='';
  institutesArray: Institute[]=[
    {
      name:'Green Leaf Ayurveda Institute',
      uid:'glai',
      rating:5,
      location:{
        address:'A-51/60, Model Town',
        state: 'Delhi',
        city: 'New Delhi',
        pin_code: 110001
      },
      specialities:['Heart','Liver']
    },
    {
      name:'Oriental Healthcare',
      uid:'oh1',
      rating:3,
      location:{
        address:'4/20, Virat Market',
        state: 'Tamil Nadu',
        city: 'Chennai',
        pin_code: 64665
      },
      specialities:['Heart']
    },
    {
      name:'Health 100 Institute',
      uid:'oh1',
      rating:3,
      location:{
        address:'A3-21, sector 13',
        state: 'Faridabad',
        city: 'Uttar Pradesh',
        pin_code: 897456
      },
      specialities:['Lungs']
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
