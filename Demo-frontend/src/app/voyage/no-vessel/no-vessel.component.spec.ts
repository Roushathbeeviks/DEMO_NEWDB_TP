import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoVesselComponent } from './no-vessel.component';

describe('NoVesselComponent', () => {
  let component: NoVesselComponent;
  let fixture: ComponentFixture<NoVesselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoVesselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoVesselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
