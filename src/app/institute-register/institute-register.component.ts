import { Component, OnInit } from '@angular/core';
import {InstituteRegisterService} from "../institute-register.service";
import {NgForm} from "@angular/forms";
import {Register} from "../register";
import {register} from "ts-node/dist";

@Component({
  selector: 'app-institute-register',
  templateUrl: './institute-register.component.html',
  styleUrls: ['./institute-register.component.css']
})
export class InstituteRegisterComponent implements OnInit {
  public register:Register;
  constructor(private institute_service:InstituteRegisterService) {
    this.newRegister();
  }
  submitted: boolean= false;
  onSubmit(registerForm: NgForm) { this.submitted = true;

    this.institute_service.sendDetails(registerForm.value).subscribe((data)=>
    {
      console.log(data);
      if (data.status === 'Success'){
        alert("Success");
      }
      else{
        alert(data.error);
      }
    });
  }
  active = true;
  newRegister() {
    this.register = new Register();
    this.active = false;
    setTimeout(()=> this.active=true, 0);
  }
  ngOnInit() {
  }

}
