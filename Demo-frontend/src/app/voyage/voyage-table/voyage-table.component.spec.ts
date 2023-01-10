import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoyageTableComponent } from './voyage-table.component';

describe('VoyageTableComponent', () => {
  let component: VoyageTableComponent;
  let fixture: ComponentFixture<VoyageTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoyageTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoyageTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
