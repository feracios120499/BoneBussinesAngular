import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentPurposeFormComponent } from './payment-purpose-form.component';

describe('PaymentPurposeFormComponent', () => {
  let component: PaymentPurposeFormComponent;
  let fixture: ComponentFixture<PaymentPurposeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentPurposeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentPurposeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
