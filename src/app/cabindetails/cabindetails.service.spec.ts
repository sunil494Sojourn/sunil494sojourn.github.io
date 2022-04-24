import { TestBed } from '@angular/core/testing';

import { CabindetailsService } from './cabindetails.service';

describe('CabindetailsService', () => {
  let service: CabindetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CabindetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
