import { TestBed } from '@angular/core/testing';

import { DatatreatmentService } from './datatreatment.service';

describe('DatatreatmentService', () => {
  let service: DatatreatmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatatreatmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
