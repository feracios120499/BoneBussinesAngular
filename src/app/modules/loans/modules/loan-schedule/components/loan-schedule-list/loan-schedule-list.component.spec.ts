import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanScheduleListComponent } from './loan-schedule-list.component';

describe('LoanScheduleListComponent', () => {
  let component: LoanScheduleListComponent;
  let fixture: ComponentFixture<LoanScheduleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanScheduleListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanScheduleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
