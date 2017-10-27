import { TestBed, inject } from '@angular/core/testing';

import { PrivateGuardService } from './private-guard.service';

describe('PrivateGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrivateGuardService]
    });
  });

  it('should be created', inject([PrivateGuardService], (service: PrivateGuardService) => {
    expect(service).toBeTruthy();
  }));
});
