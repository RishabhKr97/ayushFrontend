import { Component, OnInit } from '@angular/core';
import {GlobalService} from "../global.service";

@Component({
  selector: 'app-booked',
  templateUrl: './booked.component.html',
  styleUrls: ['./booked.component.css']
})
export class BookedComponent implements OnInit {
  id:string;
  constructor(private service:GlobalService) {
    this.id=service.id;
  }

  ngOnInit() {
  }

}
