import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoyageFormsComponent } from './voyage-forms.component';

describe('VoyageFormsComponent', () => {
  let component: VoyageFormsComponent;
  let fixture: ComponentFixture<VoyageFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoyageFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoyageFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
