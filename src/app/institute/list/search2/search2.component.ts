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
      id:'hgka',
      drName: 'Himanshu Gupta',
      fee: 200,
      speciality:'Kidney',
      department:'Ayurveda',
      location: {
        address:'A-51/60, Model Town',
        state: 'Delhi',
        city: 'New Delhi',
        pin_code: 110001
      },
      instituteName: "Green Leaf Ayurveda Institute"
    },
    {
      id:'drb2',
      drName: "Astik Verma",
      fee: 300,
      speciality:"Liver",
      department:"Homeopathy",
      location:{
        address:'A-51/60, Model Town',
        state: 'Delhi',
        city: 'New Delhi',
        pin_code: 110001
      },
      instituteName: "Green Leaf Ayurveda Institute"
    },
      {
        id:'bk908',
        drName: "Harshit Aggarwal",
        fee: 450,
        speciality:"Heart",
        department:"Unnani",
        location: {
          address:'4/20, Virat Market',
          state: 'Tamil Nadu',
          city: 'Chennai',
          pin_code: 64665
        },
        instituteName: "Oriental Healthcare"
      },
      {
        id:'jhb7h',
        drName: "Gurpreet Singh",
        fee: 500,
        speciality:"Heart",
        department:"Yoga",
        location: {
          address:'A3-21, sector 13',
          state: 'Faridabad',
          city: 'Haryana',
          pin_code: 897456
        },
        instituteName: "Health 100 Institute"
      },
      {
        id:'jhb7h',
        drName: "Dilraj Singh",
        fee: 500,
        speciality:"Lungs",
        department:"Yoga",
        location: {
          address:'A3-21, sector 13',
          state: 'Faridabad',
          city: 'Uttar Pradesh',
          pin_code: 9627255
        },
        instituteName: "Nirogyam Institute for Alternative Medicine"
      },
      {
        id:'jhb7h',
        drName: "Kripa Shankar",
        fee: 300,
        speciality:"Bones",
        department:"Yoga",
        location: {
          address:'B4-21, sector 33',
          state: 'Ghaziabad',
          city: 'Uttar Pradesh',
          pin_code: 948457
        },
        instituteName: "Health 100 Institute"
      },
      {
        id:'jhb7h',
        drName: "Anmol Mangat",
        fee: 500,
        speciality:"Skin",
        department:"Siddha",
        location: {
          address:'P-24, New Colony',
          state: 'Sonipat',
          city: 'Haryana',
          pin_code: 2345676
        },
        instituteName: "Oriental Healthcare"
      }
  ];


  constructor() { }

  ngOnInit() {
  }

}
