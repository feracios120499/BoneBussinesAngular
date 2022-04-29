import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B1RadioButtonComponent } from './b1-radio-button.component';

describe('B1RadioButtonComponent', () => {
  let component: B1RadioButtonComponent;
  let fixture: ComponentFixture<B1RadioButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B1RadioButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B1RadioButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
