import {Component, OnInit, ViewChild} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AddformService} from "../../addform.service";
@Component({
  selector: 'app-form-institute',
  templateUrl: './form-institute.component.html'
})
export class FormInstituteComponent implements OnInit {

  specialities = ['Liver', 'Heart', 'Kidney', 'Dental'];
  institutionForm: FormGroup;
  clinicForm: FormGroup;
  diagnosticForm: FormGroup;

  email_check_pattern = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?";
  @ViewChild('select') mySelect;

  constructor(private _fb: FormBuilder, private institutionDetailService: AddformService) {
    // this.institutionDetailService.getForm().subscribe(
    //   (data) => {
    //     console.log(data.institution);
    //     this.institutionForm.setValue(data.institution);
    //   }
    // );
    this.institutionDetailService.getForm().subscribe(
      (data) => {
        console.log(data);
        for (let i = 0; i < data.length; i++) {
          this.onAddService();
          for (let j = 1; j < data[i].doctors.length; j++) {
            this.onAddDoctor(i);
          }
         const control= (<[FormGroup]>(<FormArray>this.clinicForm.controls['services']).controls);
          control[i].setValue(data[i]);
        }
      }
    );
    this.createForm();
  }

  ngOnInit() {

  }

  initService() {

    return this._fb.group({
      speciality_name: new FormControl('', Validators.required),
      doctors: new FormArray([
        new FormGroup({
          doctor_name: new FormControl('', Validators.required),
          department: new FormControl('', Validators.required),
        })
      ])
    });
  }

  initDoctor() {
    return this._fb.group({
      doctor_name: new FormControl('', Validators.required),
      department: new FormControl('', Validators.required),

    });
  }

  initTest() {
    return this._fb.group({
      test_name: new FormControl('', Validators.required),
      test_fee: new FormControl('', Validators.required)
    });
  }

  onAddDoctor(index: number) {
    const control = (<[FormGroup]>(<FormArray>this.clinicForm.controls['services']).controls);
    const control2 = <FormArray>control[index].controls['doctors'];
    control2.push(this.initDoctor());

  }

  onAddService() {
    const control = <FormArray>this.clinicForm.controls['services'];
    control.push(this.initService());

  }

  onAddTest() {
    const control = <FormArray>this.diagnosticForm.controls['tests'];
    control.push(this.initTest());
  }

  formSubmit() {
    this.institutionDetailService.sendForm(this.institutionForm.value).subscribe();
  }


  private createForm() {
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
    this.clinicForm = new FormGroup({

        services: new FormArray([
          new FormGroup({
            speciality_name: new FormControl(''),
            doctors: new FormArray([
              new FormGroup({
                doctor_name: new FormControl(''),
                department: new FormControl(''),
              })
            ])
          })

        ])
      }
    );
    this.diagnosticForm = new FormGroup({
      tests: new FormArray([
        new FormGroup({
          test_name: new FormControl('',),
          test_fee: new FormControl('',)
        })
      ])
    });
  }

  sendClinic() {

    this.institutionDetailService.sendForm(this.clinicForm.value).subscribe();
  }

  sendTest() {
    this.institutionDetailService.sendForm(this.diagnosticForm);
  }
}
