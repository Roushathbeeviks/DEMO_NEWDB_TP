import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VesselHeaderComponent } from './vessel-header.component';

describe('VesselHeaderComponent', () => {
  let component: VesselHeaderComponent;
  let fixture: ComponentFixture<VesselHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VesselHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VesselHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
