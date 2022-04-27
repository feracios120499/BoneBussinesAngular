import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B1CheckboxComponent } from './b1-checkbox.component';

describe('B1CheckboxComponent', () => {
  let component: B1CheckboxComponent;
  let fixture: ComponentFixture<B1CheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B1CheckboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B1CheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
