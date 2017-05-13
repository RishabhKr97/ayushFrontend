import { Injectable } from '@angular/core';
import {Response, Http} from "@angular/http";

@Injectable()
export class PatientRegisterService {
  id_register='http://192.168.137.48:3000/patients';
  constructor(private http: Http) { }

  postForm(form:any)
  {
    return this.http.post(this.id_register,form).map((response:Response)=> response.json());
  }


}

