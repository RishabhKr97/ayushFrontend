import { Component, OnInit } from '@angular/core';
import {GlobalService} from "../global.service";

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  id;
  constructor(private idservice:GlobalService) {
    this.id=this.idservice.id;
  }

  ngOnInit() {
  }

}
