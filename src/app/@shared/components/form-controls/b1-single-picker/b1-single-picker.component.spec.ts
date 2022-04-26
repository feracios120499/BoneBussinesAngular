import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B1SinglePickerComponent } from './b1-single-picker.component';

describe('B1SinglePickerComponent', () => {
  let component: B1SinglePickerComponent;
  let fixture: ComponentFixture<B1SinglePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B1SinglePickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B1SinglePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
