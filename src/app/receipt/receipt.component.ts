import { Component, OnInit } from '@angular/core';
import {Receipt} from "../receipt";
import {ReceiptService} from "../receipt.service";

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent implements OnInit {
  public receipt:Receipt;
  constructor(private receipt_service:ReceiptService)
  {
    this.receipt_service.getReceipt().subscribe((data)=>{
      console.log(data);

    });
  }


  ngOnInit() {
  }

}
