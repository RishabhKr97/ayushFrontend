import { Component, OnInit } from '@angular/core';
import {LoginService} from "./login.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private username;
  private pass;
  constructor(private service:LoginService){

  }
  ngOnInit() {
  }
  onSignIn(){
   this.service.sendLoginDetails(this.username,this.pass).subscribe((data)=>{
     alert(data.message);
     }
   );
  }

}
