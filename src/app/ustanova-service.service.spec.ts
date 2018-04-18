import { TestBed, inject } from '@angular/core/testing';

import { UstanovaServiceService } from './ustanova-service.service';

describe('UstanovaServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UstanovaServiceService]
    });
  });

  it('should be created', inject([UstanovaServiceService], (service: UstanovaServiceService) => {
    expect(service).toBeTruthy();
  }));
});
