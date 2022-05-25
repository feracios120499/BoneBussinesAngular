import { Component, OnInit, ChangeDetectionStrategy, Input, HostListener } from '@angular/core';
import { Store } from '@ngrx/store';

import { withRequiredPropsCheck } from '@mixins/with-required-props-check.mixin';
import { Loan } from '@modules/loans/models/loan.model';
import { LoansActions } from '@modules/loans/store/actions';

@Component({
  selector: 'app-loan-item',
  templateUrl: './loan-item.component.html',
  styleUrls: ['./loan-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoanItemComponent extends withRequiredPropsCheck() implements OnInit {
  @Input() loan!: Loan;

  constructor(private store: Store) {
    super();
  }

  ngOnInit(): void {
    this.checkRequiredProps(['loan']);
  }

  onLoanMakePayment(): void {
    this.store.dispatch(LoansActions.makeLoanPayment({ loan: this.loan }));
  }

  @HostListener('dblclick')
  onLoanGoToSchedule(): void {
    this.store.dispatch(LoansActions.setCurrentLoan({ loan: this.loan }));
    this.store.dispatch(LoansActions.goToSchedule({ bankId: this.loan.bankId, loanId: this.loan.id }));
  }
}
