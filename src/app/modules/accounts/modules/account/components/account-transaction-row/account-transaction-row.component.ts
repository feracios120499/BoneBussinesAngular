import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { TurnoverTransaction } from '@modules/accounts/models/turnover-transaction.model';
import { Store } from '@ngrx/store';
import { AcctDetailsActions } from '../../store/actions';
import { AcctDetailsSelectors } from '../../store/selectors';

@Component({
  selector: 'account-transaction-row',
  templateUrl: './account-transaction-row.component.html',
  styleUrls: ['./account-transaction-row.component.scss'],
})
export class AccountTransactionRowComponent implements OnInit {
  @Input() payment!: TurnoverTransaction;

  constructor(private store: Store) {}

  currencyCode$ = this.store.select(AcctDetailsSelectors.currencyCode);

  ngOnInit(): void {}

  showTransaction(): void {
    this.store.dispatch(AcctDetailsActions.showTransactionPartial({ transaction: this.payment }));
    this.store.dispatch(
      AcctDetailsActions.loadTransactionDetailRequest({
        id: this.payment.documentId,
        bankId: this.payment.bankId,
      })
    );
  }
}
