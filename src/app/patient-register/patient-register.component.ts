import { Component, OnInit } from '@angular/core';
import {Contact} from "../contact";
import {PatientService} from "../patient.service";
import {NgForm} from "@angular/forms";
import {PatientRegisterService} from "../patient-register.service";
import {PatientRegister} from "../patient-register";

@Component({
  selector: 'app-patient-register',
  templateUrl: './patient-register.component.html',
  styleUrls: ['./patient-register.component.css']
})
export class PatientRegisterComponent implements OnInit {

  public patientR:PatientRegister;
  constructor(private patientReg_service:PatientRegisterService) {
    this.newPatient();
  }
  submitted = false;
  onSubmit(registerForm: NgForm) {
    this.submitted = true;
    console.log(registerForm);

    this.patientReg_service.postForm(registerForm.value).subscribe((data)=>{
      if (data.status==='Success'){
        alert("Success");
      }
      else{
        alert(data.error);
      }
    });
  }
  active = true;
  newPatient() {
    this.patientR = new PatientRegister();
    this.active = false;
    setTimeout(()=> this.active=true, 0);
  }
  ngOnInit() {
  }


}

