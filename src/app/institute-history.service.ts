import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import {Http,Response} from "@angular/http";

@Injectable()
export class InstituteHistoryService {

  id_institute='http://10.1.7.28:3000/institutions/1/history';
  constructor(private http:Http) {

  }

  getAppointment()
  {
    return this.http.get(this.id_institute).map((response:Response)=> response.json());
  }

}
