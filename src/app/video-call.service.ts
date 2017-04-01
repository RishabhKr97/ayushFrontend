import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import 'rxjs/Rx';
@Injectable()
export class VideoCallService {
  url='';
  constructor(private _http:Http) { }
  sendDoctorKey(key:string){
    return this._http.put(this.url,key);
  }
  recieveDoctorkey(){
    return this._http.get(this.url).map((response:Response) => response.json());
  }

}
