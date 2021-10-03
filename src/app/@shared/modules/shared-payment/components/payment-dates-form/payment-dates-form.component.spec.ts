import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentDatesFormComponent } from './payment-dates-form.component';

describe('PaymentDatesFormComponent', () => {
  let component: PaymentDatesFormComponent;
  let fixture: ComponentFixture<PaymentDatesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentDatesFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentDatesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
