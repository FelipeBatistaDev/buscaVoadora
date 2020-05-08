import { TestBed } from '@angular/core/testing';

import { FlightFacadeService } from './flight.facade.service';

describe('Flight.FacadeService', () => {
  let service: FlightFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlightFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
