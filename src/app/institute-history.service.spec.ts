import { TestBed, inject } from '@angular/core/testing';

import { InstituteHistoryService } from './institute-history.service';

describe('InstituteHistoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InstituteHistoryService]
    });
  });

  it('should ...', inject([InstituteHistoryService], (service: InstituteHistoryService) => {
    expect(service).toBeTruthy();
  }));
});
