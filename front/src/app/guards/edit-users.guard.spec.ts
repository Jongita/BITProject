import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { editUsersGuard } from './edit-users.guard';

describe('editUsersGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => editUsersGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
