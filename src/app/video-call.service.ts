import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import 'rxjs/Rx';
@Injectable()
export class VideoCallService {
  url='http://192.168.137.48:3000/videos/1';
  constructor(private _http:Http) { }
  sendDoctorKey(key:string){
    const keyObject={room_key:key};
    return this._http.put(this.url,keyObject);
  }
  sendPrescription(key:string){
    const keyObject={prescription:key};
    return this._http.put(this.url,keyObject);
  }
  recieveDoctorkey(){
    return this._http.get(this.url).map((response:Response) => response.json());
  }

}
