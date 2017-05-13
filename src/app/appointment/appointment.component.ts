import { Component, OnInit } from '@angular/core';
import {Appointment} from "../appointment";
import {AppointmentService} from "../appointment.service";

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  status: number;
  public appt: Appointment[]=[];
  constructor(private appt_service: AppointmentService) {
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

}
