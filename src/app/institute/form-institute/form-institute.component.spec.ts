import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInstituteComponent } from './form-institute.component';

describe('FormInstituteComponent', () => {
  let component: FormInstituteComponent;
  let fixture: ComponentFixture<FormInstituteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormInstituteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInstituteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
