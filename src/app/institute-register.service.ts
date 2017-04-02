import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import'rxjs/Rx';

@Injectable()
export class InstituteRegisterService {
  id_register='http://192.168.137.12:3000/signup';
  constructor(private http: Http) {

  }

  sendDetails(form: any)
  {
    return this.http.post(this.id_register,form).map((response:Response)=>response.json());
  }

}
