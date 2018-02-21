import { TestBed, inject } from '@angular/core/testing';

import { ServiceFocusBlurService } from './service-focus-blur.service';

describe('ServiceFocusBlurService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceFocusBlurService]
    });
  });

  it('should be created', inject([ServiceFocusBlurService], (service: ServiceFocusBlurService) => {
    expect(service).toBeTruthy();
  }));
});
