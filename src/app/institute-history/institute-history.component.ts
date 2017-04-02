import { Component, OnInit } from '@angular/core';
import {InstituteHistoryService} from "../institute-history.service";
import {IHistory} from "../history";

@Component({
  selector: 'app-institute-history',
  templateUrl: './institute-history.component.html',
  styleUrls: ['./institute-history.component.css']
})
export class InstituteHistoryComponent implements OnInit {
  status: number;
  public history: IHistory[]=[];

  constructor(private history_service: InstituteHistoryService) {
    // this.history_service.getAppointment().subscribe(
    //   (data)=>{
    //     console.log(data);
    //     for(let item of data){
    //       this.history.push(new IHistory(item.patient_id,item.date,item.BeginTime,item.EndTime,item.mode,item.status,item.id));
    //     }
    //     console.log(this.history);
    //   });
  }

  ngOnInit() {
  }

}
