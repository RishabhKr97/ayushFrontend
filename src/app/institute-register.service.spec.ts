import { TestBed, inject } from '@angular/core/testing';

import { InstituteRegisterService } from './institute-register.service';

describe('InstituteRegisterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InstituteRegisterService]
    });
  });

  it('should ...', inject([InstituteRegisterService], (service: InstituteRegisterService) => {
    expect(service).toBeTruthy();
  }));
});
