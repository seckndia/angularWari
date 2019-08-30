import { TestBed } from '@angular/core/testing';

import { SupAdUserService } from './sup-ad-user.service';

describe('SupAdUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SupAdUserService = TestBed.get(SupAdUserService);
    expect(service).toBeTruthy();
  });
});
