import { Injectable } from '@angular/core';
import {Http,Response} from "@angular/http";
import'rxjs/Rx';

@Injectable()
export class ReceiptService {

  id_receipt='';
  constructor(private http: Http) {

  }

  getReceipt()
  {
    return this.http.get(this.id_receipt).map((response:Response)=> response.json());
  }
}
