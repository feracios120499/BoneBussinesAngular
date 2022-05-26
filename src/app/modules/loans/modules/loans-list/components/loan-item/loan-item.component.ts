import { Component, ChangeDetectionStrategy, Input, HostListener } from '@angular/core';
import { Store } from '@ngrx/store';

import { BaseSkeletonComponent } from '@directives/skeleton/base-skeleton.component';
import { Loan } from '@modules/loans/models/loan.model';
import { LoansActions } from '@modules/loans/store/actions';

@Component({
  selector: 'app-loan-item',
  templateUrl: './loan-item.component.html',
  styleUrls: ['./loan-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  inputs: ['skeletonMode'],
})
export class LoanItemComponent extends BaseSkeletonComponent {
  @Input() loan!: Loan;

  constructor(private store: Store) {
    super();
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
