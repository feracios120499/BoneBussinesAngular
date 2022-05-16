import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsListPaymentsComponent } from './payments-list-payments.component';

describe('PaymentsListPaymentsComponent', () => {
  let component: PaymentsListPaymentsComponent;
  let fixture: ComponentFixture<PaymentsListPaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentsListPaymentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentsListPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
