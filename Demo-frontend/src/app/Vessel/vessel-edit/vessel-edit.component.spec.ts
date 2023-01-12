import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VesselEditComponent } from './vessel-edit.component';

describe('VesselEditComponent', () => {
  let component: VesselEditComponent;
  let fixture: ComponentFixture<VesselEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VesselEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VesselEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
