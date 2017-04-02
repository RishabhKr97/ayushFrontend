import { Injectable } from '@angular/core';
import {Response, Http} from "@angular/http";

@Injectable()
export class PatientRegisterService {
  id_register='http://10.1.7.28:3000/patients';
  constructor(private http: Http) { }

  postForm(form:any)
  {
    return this.http.post(this.id_register,form).map((response:Response)=> response.json());
  }

  getstatus()
  {
    return this.http.get(this.id_register).map((response:Response)=> response.json());
  }
}

