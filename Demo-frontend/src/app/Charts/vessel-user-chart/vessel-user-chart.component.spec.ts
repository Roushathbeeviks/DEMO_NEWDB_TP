import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VesselUserChartComponent } from './vessel-user-chart.component';

describe('VesselUserChartComponent', () => {
  let component: VesselUserChartComponent;
  let fixture: ComponentFixture<VesselUserChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VesselUserChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VesselUserChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
