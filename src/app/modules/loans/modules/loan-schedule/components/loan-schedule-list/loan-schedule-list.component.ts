import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { LoansSelectors } from '@modules/loans/store/selectors';
import { LoanSchedule } from '@modules/loans/models/loan-schedule.model';
import { Loan } from '@modules/loans/models/loan.model';
import { required } from '@store/shared';
import { ResizeService } from '@services/resize.service';

@Component({
  selector: 'app-loan-schedule-list',
  templateUrl: './loan-schedule-list.component.html',
  styleUrls: ['./loan-schedule-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoanScheduleListComponent {
  isLoading$: Observable<boolean> = this.store.select(LoansSelectors.isLoadingLoanSchedules);
  loan$: Observable<Loan> = required(this.store.select(LoansSelectors.currentLoan));
  loanSchedules$: Observable<LoanSchedule[]> = this.store.select(LoansSelectors.loanScheduleList);
  isMobile$ = this.resizeService.isMobile$;

  constructor(private store: Store, private resizeService: ResizeService) {}
}
