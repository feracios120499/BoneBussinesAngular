import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B1EditPaymentModalComponent } from './b1-edit-payment-modal.component';

describe('B1EditPaymentModalComponent', () => {
  let component: B1EditPaymentModalComponent;
  let fixture: ComponentFixture<B1EditPaymentModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B1EditPaymentModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B1EditPaymentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
