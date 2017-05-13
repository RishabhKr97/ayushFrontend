import {Component, OnInit, ViewChild} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AddformService} from "../../addform.service";
@Component({
  selector: 'app-form-institute',
  templateUrl: './form-institute.component.html'
})
export class FormInstituteComponent implements OnInit {

  specialities = ['Liver', 'Heart', 'Kidney', 'Dental'];

  clinicForm: FormGroup;
  diagnosticForm: FormGroup;


  constructor(private _fb: FormBuilder, private institutionDetailService: AddformService) {

    // this.institutionDetailService.getForm().subscribe(
    //   (data) => {
    //     console.log(data);
    //     for (let i = 0; i < data.length; i++) {
    //       this.onAddService();
    //       for (let j = 1; j < data[i].doctors.length; j++) {
    //         this.onAddDoctor(i);
    //       }
    //      const control= (<[FormGroup]>(<FormArray>this.clinicForm.controls['services']).controls);
    //       control[i].setValue(data[i]);
    //     }
    //   }
    // );
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




  private createForm() {

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
