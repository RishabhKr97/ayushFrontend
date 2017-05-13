import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorVideoComponent } from './doctor-video.component';

describe('DoctorVideoComponent', () => {
  let component: DoctorVideoComponent;
  let fixture: ComponentFixture<DoctorVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
