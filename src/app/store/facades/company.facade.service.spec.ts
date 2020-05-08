import { TestBed } from '@angular/core/testing';

import { CompanyFacadeService } from './company.facade.service';

describe('CompanyFacadeService', () => {
  let service: CompanyFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompanyFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
