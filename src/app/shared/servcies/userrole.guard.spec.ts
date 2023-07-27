import { TestBed } from '@angular/core/testing';

import { UseroleGuard } from './userrole.guard';

describe('UserroleGuard', () => {
  let guard: UseroleGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UseroleGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
