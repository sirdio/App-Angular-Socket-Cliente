import { TestBed } from '@angular/core/testing';

import { UsuariosGuardService } from './usuarios-guard.service';

describe('UsuariosGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsuariosGuardService = TestBed.get(UsuariosGuardService);
    expect(service).toBeTruthy();
  });
});
