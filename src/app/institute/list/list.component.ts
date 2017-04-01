import {Component, Input, OnInit} from '@angular/core';
import {IInstitute} from "../institute.interface";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
   searchName: string='';
   searchLoc: string='';
   departmentFlag: boolean[]=[false,false,false,false,false];

 flip(a:number):void{
   this.departmentFlag[a]=!this.departmentFlag[a];
   console.log('just flipped to '+ this.departmentFlag );
 }

  institutes: IInstitute[] = [
    {
      'uid':"A1",
      'name':"A insti",
      'photos':['demoURL'],
      'ratings':5,
      'department' :['Ayurveda', 'Homeopathy'],
      'location': 'Dehradun',
      'about': 'best in the world!!',
      "services":[{specialityName:'heart',doctors:[{name:'D1',experience:'1',ratings:3,discipline:'Ayurveda'}]}],
      "tests":[{testName:'A',testFee:1}]
    },
    {
      'uid':"y1",
      'name':"Y insti",
      'photos':['demoURL'],
      'ratings':4.5,//from services
      'department': ['Unnani'],
      'location': 'Delhi',
      'about': 'lol chinki',
      "services":[{specialityName:'heart',doctors:[{name:'D1',experience:'1',ratings:3,discipline:'Ayurveda'}]}],
      "tests":[{testName:'A',testFee:1}]
    },
    {
      'uid':"s",
      'name':"S insti",
      'photos':['demoURL'],
      'ratings':5,//from services
      'department': ['Ayurveda', 'Homeopathy'],
      'location': 'Mumbai',
      'about': 'good',
      "services":[{specialityName:'heart',doctors:[{name:'D1',experience:'1',ratings:3,discipline:'Ayurveda'}]}],
      "tests":[{testName:'A',testFee:1}]
    }
  ];
  constructor() { }
  ngOnInit() {
  }
}
