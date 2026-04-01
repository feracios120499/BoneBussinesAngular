import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupdocumentPaymentRowComponent } from './supdocument-payment-row.component';

describe('SupdocumentPaymentRowComponent', () => {
  let component: SupdocumentPaymentRowComponent;
  let fixture: ComponentFixture<SupdocumentPaymentRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupdocumentPaymentRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupdocumentPaymentRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
