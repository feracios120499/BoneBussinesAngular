import { ComponentFixture, TestBed } from '@angular/core/testing';

import B1CurrencySumComponent from './b1-currency-sum.component';

describe('B1CurrencySumComponent', () => {
  let component: B1CurrencySumComponent;
  let fixture: ComponentFixture<B1CurrencySumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [B1CurrencySumComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B1CurrencySumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
