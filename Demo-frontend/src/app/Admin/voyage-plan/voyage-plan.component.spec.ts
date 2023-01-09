import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoyagePlanComponent } from './voyage-plan.component';

describe('VoyagePlanComponent', () => {
  let component: VoyagePlanComponent;
  let fixture: ComponentFixture<VoyagePlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoyagePlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoyagePlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
