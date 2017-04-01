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
      name:'A Institute',
      uid:'a1',
      rating:5,
      location:{
        address:'1,abc',
        state: 'Delhi',
        city: 'New Delhi',
        pin_code: 110001
      },
      specialities:['Heart','Liver']
    },
    {
      name:'B Institute',
      uid:'B2',
      rating:3,
      location:{
        address:'3,adsv',
        state: 'Karnataka',
        city: 'Bangalore',
        pin_code: 64665
      },
      specialities:['Kidney']
    }

  ];

  constructor() { }

  ngOnInit() {
  }

}
