import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsHeaderComponent } from './payments-header.component';

describe('PaymentsHeaderComponent', () => {
  let component: PaymentsHeaderComponent;
  let fixture: ComponentFixture<PaymentsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentsHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
