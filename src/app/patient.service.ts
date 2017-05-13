import { Injectable } from '@angular/core';
import {Http,Response} from "@angular/http";
import'rxjs/Rx';

@Injectable()
export class PatientService {
 id_service='http://192.168.137.48:3000/patients/1';
  constructor(private http: Http) {

  }

  sendForm(form: any)
  {
    return this.http.put(this.id_service,form);
  }

  getForm()
  {
    return this.http.get(this.id_service).map((response:Response)=> response.json());
  }

}
