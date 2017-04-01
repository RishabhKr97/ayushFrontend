import { TestBed, inject } from '@angular/core/testing';

import { VideoCallService } from './video-call.service';

describe('VideoCallService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VideoCallService]
    });
  });

  it('should ...', inject([VideoCallService], (service: VideoCallService) => {
    expect(service).toBeTruthy();
  }));
});
