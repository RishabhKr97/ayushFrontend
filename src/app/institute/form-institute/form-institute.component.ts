import {Component, OnInit, ViewChild} from '@angular/core';


import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
@Component({
  selector: 'app-form-institute',
  templateUrl: './form-institute.component.html'
})
export class FormInstituteComponent implements OnInit {
  specialities = ['Liver', 'Heart', 'Kidney', 'Dental'];
  myForm: FormGroup;
  email_check_pattern = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?";
  @ViewChild('select') mySelect;

  constructor(private _fb: FormBuilder) {
    this.myForm = new FormGroup(
      {
        name: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.pattern(this.email_check_pattern)]),
        password: new FormControl('', Validators.required),
        phone: new FormControl('', Validators.required),
        address: new FormControl('', Validators.required),

        services: new FormArray([
          new FormGroup({
            specialityName: new FormControl('', Validators.required),
            doctors: new FormArray([
              new FormGroup({
                name: new FormControl('', Validators.required),
                experience: new FormControl('', Validators.required),
                ratings: new FormControl('', Validators.required),
                discipline: new FormControl('', Validators.required),
              })
            ])
          }),

        ]),
        tests:new FormArray([
          new FormGroup({
            testName:new FormControl('',Validators.required),
            testFee:new FormControl('',Validators.required)
          })
        ])
      }
    );
  }

  ngOnInit() {

  }
  initService() {

    return this._fb.group({
      specialityName: new FormControl('', Validators.required),
      doctors: new FormArray([
        new FormGroup({
          name: new FormControl('', Validators.required),
          experience: new FormControl('', Validators.required),
          ratings: new FormControl('', Validators.required),
          discipline: new FormControl('', Validators.required),
        })
      ])
    });
  }
  initDoctor(){
    return this._fb.group({
      name: new FormControl('', Validators.required),
      experience: new FormControl('', Validators.required),
      ratings: new FormControl('', Validators.required),
      discipline: new FormControl('', Validators.required),

    });
  }
  initTest() {
    return this._fb.group({
      testName:new FormControl('',Validators.required),
      testFee:new FormControl('',Validators.required)
    });
  }
  onAddDoctor(index:number) {
    const control = (<[FormGroup]>(<FormArray>this.myForm.controls['services']).controls);
   const control2 = <FormArray>control[index].controls['doctors'];
    control2.push(this.initDoctor());

  }
  onAddService(){
    const control = <FormArray>this.myForm.controls['services'];
    control.push(this.initService());

  }
  onAddTest(){
    const control = <FormArray>this.myForm.controls['tests'];
    control.push(this.initTest());
  }


}
