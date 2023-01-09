import { TestBed } from '@angular/core/testing';

import { VoyageplanService } from './voyageplan.service';

describe('VoyageplanService', () => {
  let service: VoyageplanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VoyageplanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
