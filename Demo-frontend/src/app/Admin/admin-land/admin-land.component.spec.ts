import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLandComponent } from './admin-land.component';

describe('AdminLandComponent', () => {
  let component: AdminLandComponent;
  let fixture: ComponentFixture<AdminLandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminLandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminLandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
