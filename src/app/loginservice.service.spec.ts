import { TestBed } from '@angular/core/testing';

import { LoginserviceService } from './loginservice.service';

describe('LoginServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginserviceService = TestBed.get(LoginserviceService);
    expect(service).toBeTruthy();
  });
});
