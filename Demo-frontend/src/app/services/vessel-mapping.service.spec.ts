import { TestBed } from '@angular/core/testing';

import { VesselMappingService } from './vessel-mapping.service';

describe('VesselMappingService', () => {
  let service: VesselMappingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VesselMappingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
