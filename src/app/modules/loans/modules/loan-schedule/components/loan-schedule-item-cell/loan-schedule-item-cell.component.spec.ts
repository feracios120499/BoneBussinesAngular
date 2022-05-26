import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanScheduleItemCellComponent } from './loan-schedule-item-cell.component';

describe('LoanScheduleItemCellComponent', () => {
  let component: LoanScheduleItemCellComponent;
  let fixture: ComponentFixture<LoanScheduleItemCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanScheduleItemCellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanScheduleItemCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
