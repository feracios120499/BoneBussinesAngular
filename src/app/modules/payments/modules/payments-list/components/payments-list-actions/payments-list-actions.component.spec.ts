import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsListActionsComponent } from './payments-list-actions.component';

describe('PaymentsListActionsComponent', () => {
  let component: PaymentsListActionsComponent;
  let fixture: ComponentFixture<PaymentsListActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentsListActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentsListActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
