import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanScheduleItemComponent } from './loan-schedule-item.component';

describe('LoanScheduleItemComponent', () => {
  let component: LoanScheduleItemComponent;
  let fixture: ComponentFixture<LoanScheduleItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanScheduleItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanScheduleItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
