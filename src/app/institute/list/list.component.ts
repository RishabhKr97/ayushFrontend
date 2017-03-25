import { Component, Pipe ,  OnInit } from '@angular/core';
import {IInstitute} from "../institute.interface";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  //pipes: [NameFilterPipe , LocFilterPipe]
})
export class ListComponent implements OnInit {
  searchName: string='';
  searchLoc: string='';

  institutes: IInstitute[] = [
    {
      'uid':"A1",
      'name':"A insti",
      'fees':100,
      'specialities':['heart' , 'liver'],//TODO: derieve from doctors
      'photos':['demoURL'],
      'ratings':5,//TODO: derieve from doctors
      'disciplines': ['ayurveda', 'homeopathy'],
      'location': 'Delhi',
      'about': 'best in the world!!',
      'doctors':[{name:'Dr.A1',ratings:5,speciality:['heart']}]
    },
    {
      'uid':"y1",
      'name':"Y insti",
      'fees':100,
      'specialities':[ 'Bones'],//for d in doctors
      'photos':['demoURL'],
      'ratings':4.5,//from doctors
      'disciplines': ['Yunani'],
      'location': 'Delhi',
      'about': 'lol chinki',
      'doctors':[{name:'Dr.Y1',ratings:5,speciality:['Bones']}]
    },
    {
      'uid':"s",
      'name':"S insti",
      'fees':100,
      'specialities':['stomach'],//for d in doctors
      'photos':['demoURL'],
      'ratings':5,//from doctors
      'disciplines': ['ayurveda', 'homeopathy'],
      'location': 'Delhi',
      'about': 'good',
      'doctors':[{name:'Dr.S1',ratings:5,speciality:['stomach']}]
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
