import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientVideoComponent } from './patient-video.component';

describe('PatientVideoComponent', () => {
  let component: PatientVideoComponent;
  let fixture: ComponentFixture<PatientVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
