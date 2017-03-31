import { TestBed, inject } from '@angular/core/testing';

import { AddformService } from './addform.service';

describe('AddformService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddformService]
    });
  });

  it('should ...', inject([AddformService], (service: AddformService) => {
    expect(service).toBeTruthy();
  }));
});
