import {TestBed, inject} from '@angular/core/testing';

import {AuthentService} from './authent.service';

describe('AuthentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthentService]
    });
  });

  it('should be created', inject([AuthentService], (service: AuthentService) => {
    expect(service).toBeTruthy();
  }));
});
