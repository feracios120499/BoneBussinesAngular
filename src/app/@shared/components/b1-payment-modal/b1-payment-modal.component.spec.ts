import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B1PaymentModalComponent } from './b1-payment-modal.component';

describe('B1PaymentModalComponent', () => {
  let component: B1PaymentModalComponent;
  let fixture: ComponentFixture<B1PaymentModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B1PaymentModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B1PaymentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
