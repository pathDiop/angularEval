import { TestBed } from '@angular/core/testing';

import { PsersonnageService } from './psersonnage.service';

describe('PsersonnageService', () => {
  let service: PsersonnageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PsersonnageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
