import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VesselLandComponent } from './vessel-land.component';

describe('VesselLandComponent', () => {
  let component: VesselLandComponent;
  let fixture: ComponentFixture<VesselLandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VesselLandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VesselLandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
