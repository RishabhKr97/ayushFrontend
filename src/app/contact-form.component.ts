import {Component} from '@angular/core';

import { Contact } from './contact';
import {PatientService} from "./patient.service";
import {NgForm} from "@angular/forms";
@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html'
})
export class ContactComponent {
  public contact:Contact;

  constructor(private patient_service: PatientService){
    this.newContact();
    this.patient_service.getForm().subscribe(
      (data)=>{
        this.contact.first_name = data.first_name;
        this.contact.last_name = data.last_name;
        this.contact.mobile = data.mobile;
        this.contact.gender = data.gender;
        this.contact.dob = data.dob;
        this.contact.address = data.address;
        this.contact.blood_grp = data.blood_grp;
        this.contact.email = data.email;
        this.contact.aadhar = data.aadhar;

      }
    );
  }
  submitted = false;
  onSubmit(patientForm: NgForm) { this.submitted = true;
  console.log(patientForm);

  this.patient_service.sendForm(patientForm.value).subscribe();
  }
  active = true;
  newContact() {
    this.contact = new Contact();
    this.active = false;
    setTimeout(()=> this.active=true, 0);
  }
}
