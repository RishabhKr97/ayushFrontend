import { Component, OnInit } from '@angular/core';
import {Appointment} from "../appointment";
import {AppointmentService} from "../appointment.service";
import {ReceiptService} from "../receipt.service"
import {Receipt} from "../receipt"


@Component({
  selector: 'app-user-upcoming',
  templateUrl: './user-upcoming.component.html',
  styleUrls: ['./user-upcoming.component.css']
})
export class UserUpcomingComponent implements OnInit {
  status: number;
  show: boolean = false;
  public appt: Appointment[]=[];
  public appt_data: Receipt;
  constructor(private appt_service: AppointmentService, private receipt_service:ReceiptService) {
    this.appt_service.getAppointment().subscribe(
      (data)=>{
        console.log(data);
        for(let item of data){
        this.appt.push(new Appointment(item.patient_id,item.date,item.BeginTime,item.EndTime,item.mode,item.status,item.id));

        }
console.log(this.appt);
      });
  }

  ngOnInit() {
  }

  row_click(id) {
  	this.receipt_service.getReceiptWithId(id).subscribe((data)=>{
  		this.show = true;
      this.appt_data = new Receipt(data.id,data.first_name,data.last_name,data.mobile,data.email,data.doctor_name,data.department,data.speciality_name, data.name,data.rate,data.BeginTime,data.EndTime,data.prescription);
      console.log(this.appt_data);

  	});
  }
}
