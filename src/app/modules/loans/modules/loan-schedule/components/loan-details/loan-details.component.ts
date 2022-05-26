import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { required } from '@store/shared';
import { Loan } from '@modules/loans/models/loan.model';
import { LoansSelectors } from '@modules/loans/store/selectors';
import { LoansActions } from '@modules/loans/store/actions';

@Component({
  selector: 'app-loan-details',
  templateUrl: './loan-details.component.html',
  styleUrls: ['./loan-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoanDetailsComponent {
  loan$: Observable<Loan> = required(this.store.select(LoansSelectors.currentLoan));

  constructor(private store: Store) {}

  onLoanMakePayment(loan: Loan): void {
    this.store.dispatch(LoansActions.makeLoanPayment({ loan }));
  }
}
