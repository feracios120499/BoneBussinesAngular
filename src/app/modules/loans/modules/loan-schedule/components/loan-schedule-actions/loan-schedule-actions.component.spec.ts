import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanScheduleActionsComponent } from './loan-schedule-actions.component';

describe('LoanScheduleActionsComponent', () => {
  let component: LoanScheduleActionsComponent;
  let fixture: ComponentFixture<LoanScheduleActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanScheduleActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanScheduleActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
