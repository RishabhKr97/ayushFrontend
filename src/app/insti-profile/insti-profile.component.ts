import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AddformService} from "../addform.service";

@Component({
  selector: 'app-insti-profile',
  templateUrl: './insti-profile.component.html',
  styleUrls: ['./insti-profile.component.css']
})
export class InstiProfileComponent implements OnInit {
  institutionForm: FormGroup;
  email_check_pattern = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?";
  constructor(private institutionDetailService: AddformService) {
    this.institutionDetailService.getForm().subscribe(
      (data) => {
        console.log(data.institution);
        this.institutionForm.setValue(data.institution);
      }
    );
    this.institutionForm = new FormGroup(
      {
        id: new FormControl(''),
        name: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.pattern(this.email_check_pattern)]),
        //password: new FormControl('' ),
        contact_number: new FormControl('', Validators.required),
        about: new FormControl('', Validators.required),
        website: new FormControl('', Validators.required),
        photo: new FormControl('', Validators.required),

      }
    );
  }

  ngOnInit() {
  }
  formSubmit() {
    this.institutionDetailService.sendForm(this.institutionForm.value).subscribe();
  }
}
