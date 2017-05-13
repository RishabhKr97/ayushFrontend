import { TestBed, inject } from '@angular/core/testing';

import { PatientRegisterService } from './patient-register.service';

describe('PatientRegisterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PatientRegisterService]
    });
  });

  it('should ...', inject([PatientRegisterService], (service: PatientRegisterService) => {
    expect(service).toBeTruthy();
  }));
});
