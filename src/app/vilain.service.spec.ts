import { TestBed } from '@angular/core/testing';

import { VilainService } from './vilain.service';

describe('VilainService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VilainService = TestBed.get(VilainService);
    expect(service).toBeTruthy();
  });
});
