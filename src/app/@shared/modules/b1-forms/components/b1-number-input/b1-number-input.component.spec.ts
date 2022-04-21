import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B1NumberInputComponent } from './b1-number-input.component';

describe('B1NumberInputComponent', () => {
  let component: B1NumberInputComponent;
  let fixture: ComponentFixture<B1NumberInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B1NumberInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B1NumberInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
