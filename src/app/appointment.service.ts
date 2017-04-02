import { Injectable } from '@angular/core';
import {Http,Response} from "@angular/http";
import'rxjs/Rx';

@Injectable()
export class AppointmentService {
  id_appointment='http://10.1.7.28:3000/patients/1/appointments';
  constructor(private http: Http) {

  }

  getAppointment()
  {
    return this.http.get(this.id_appointment).map((response:Response)=> response.json());
  }

}
