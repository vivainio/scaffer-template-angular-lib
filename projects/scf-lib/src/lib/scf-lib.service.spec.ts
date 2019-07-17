import { TestBed } from '@angular/core/testing';

import { ScfLibService } from './scf-lib.service';

describe('ScfLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScfLibService = TestBed.get(ScfLibService);
    expect(service).toBeTruthy();
  });
});
