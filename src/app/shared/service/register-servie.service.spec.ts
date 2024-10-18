import { TestBed } from '@angular/core/testing';

import { RegisterServieService } from './register-servie.service';

describe('RegisterServieService', () => {
  let service: RegisterServieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterServieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
