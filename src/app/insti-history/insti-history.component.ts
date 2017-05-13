import { Component, OnInit } from '@angular/core';
import {InstituteHistoryService} from "../institute-history.service";
import {IHistory} from "../history";
import {ReceiptService} from "../receipt.service"
import {Receipt} from "../receipt"

@Component({
  selector: 'app-insti-history',
  templateUrl: './insti-history.component.html',
  styleUrls: ['./insti-history.component.css']
})
export class InstiHistoryComponent implements OnInit {
  status: number;
  show: boolean = false;
  public history: IHistory[]=[];
  public history_data: Receipt;
  constructor(private history_service: InstituteHistoryService, private receipt_service:ReceiptService) {
    this.history_service.getAppointment().subscribe(
      (data)=>{
        console.log(data);
        for(let item of data){
          this.history.push(new IHistory(item.patient_id,item.date,item.BeginTime,item.EndTime,item.mode,item.status,item.id));
        }
        console.log(this.history);
      });
  }

  ngOnInit() {
  }

  row_click(id) {
    this.receipt_service.getReceiptWithId(id).subscribe((data)=>{
      this.show = true;
      this.history_data = new Receipt(data.id,data.first_name,data.last_name,data.mobile,data.email,data.doctor_name,data.department,data.speciality_name, data.name,data.rate,data.BeginTime,data.EndTime,data.prescription);
      console.log(this.history_data);

    });
  }

}
