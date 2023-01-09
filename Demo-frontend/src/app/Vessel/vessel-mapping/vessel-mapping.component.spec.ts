import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VesselMappingComponent } from './vessel-mapping.component';

describe('VesselMappingComponent', () => {
  let component: VesselMappingComponent;
  let fixture: ComponentFixture<VesselMappingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VesselMappingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VesselMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
