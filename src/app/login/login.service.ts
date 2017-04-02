import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";

@Injectable()
export class LoginService {
  url='http://192.168.137.12:3000/patients/';
  url2='/login';
  constructor(private http:Http) { }
  sendLoginDetails(id:string,pass:string){
    return this.http.get(this.url+id+this.url2+'?password='+pass).map((response:Response)=> response.json());

  }

}
