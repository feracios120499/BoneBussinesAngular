import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsSumComponent } from './payments-sum.component';

describe('PaymentsSumComponent', () => {
  let component: PaymentsSumComponent;
  let fixture: ComponentFixture<PaymentsSumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentsSumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentsSumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
