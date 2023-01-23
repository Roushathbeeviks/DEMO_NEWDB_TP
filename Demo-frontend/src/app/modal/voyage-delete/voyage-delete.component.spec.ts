import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoyageDeleteComponent } from './voyage-delete.component';

describe('VoyageDeleteComponent', () => {
  let component: VoyageDeleteComponent;
  let fixture: ComponentFixture<VoyageDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoyageDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoyageDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
