import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { LoansActions } from '@modules/loans/store/actions';
import { LoansSelectors } from '@modules/loans/store/selectors';

@Component({
  selector: 'app-loan-schedule',
  templateUrl: './loan-schedule.component.html',
  styleUrls: ['./loan-schedule.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoanScheduleComponent implements OnInit {
  isLoading$: Observable<boolean> = this.store.select(LoansSelectors.isLoading);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(LoansActions.loadLoanSchedulesRequest());
  }
}
