import { Component, OnInit } from '@angular/core';
import { Transaction } from '@modules/accounts/models/transaction.model';
import { Store } from '@ngrx/store';
import { PayIncomingActions } from '../../store/actions';
import { PayIncomingSelectors } from '../../store/selectors';

@Component({
  selector: 'app-incoming-list',
  templateUrl: './incoming-list.component.html',
  styleUrls: ['./incoming-list.component.scss'],
})
export class IncomingListComponent implements OnInit {
  constructor(private store: Store) {}

  transactions$ = this.store.select(PayIncomingSelectors.transactions);
  ngOnInit(): void {}

  selectTransaction(transaction: Transaction): void {
    this.store.dispatch(PayIncomingActions.selectTransaction({ transaction }));
  }
}
