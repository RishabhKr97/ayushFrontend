import { Injectable } from '@angular/core';
import {Http,Response} from "@angular/http";
import'rxjs/Rx';

@Injectable()
export class ReceiptService {

  id_receipt='http://192.168.137.48:3000/appointments/';
  constructor(private http: Http) {

  }

  getReceipt()
  {
    return this.http.get(this.id_receipt).map((response:Response)=> response.json());
  }
  getReceiptWithId(id)
  {
    return this.http.get(this.id_receipt+id+'/receipt').map((response:Response)=> response.json());
  }
}
