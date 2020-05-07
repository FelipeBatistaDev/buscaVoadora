import { TestBed } from '@angular/core/testing';

import { Flight.FacadeService } from './flight.facade.service';

describe('Flight.FacadeService', () => {
  let service: Flight.FacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Flight.FacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
