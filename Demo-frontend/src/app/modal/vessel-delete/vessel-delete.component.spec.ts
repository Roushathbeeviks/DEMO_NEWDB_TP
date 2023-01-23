import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VesselDeleteComponent } from './vessel-delete.component';

describe('VesselDeleteComponent', () => {
  let component: VesselDeleteComponent;
  let fixture: ComponentFixture<VesselDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VesselDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VesselDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
