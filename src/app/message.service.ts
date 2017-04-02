import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import 'rxjs/Rx';
@Injectable()
export class MessageService {
  url='';
  constructor(private http:Http) { }
  getConversations(){
    return this.http.get(this.url).map((response:Response)=>{
      response.json();
    });
  }

}
