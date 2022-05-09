import { Component, OnInit } from '@angular/core';
import { PaymentAction } from '@models/enums/payment-action.enum';
import { StatusCode } from '@models/enums/status-code.enum';
import { PaymentModal } from '@models/payment-modal.model';
import { Transaction, UiTransaction } from '@modules/accounts/models/transaction.model';
import { Store } from '@ngrx/store';
import { ResizeService } from '@services/resize.service';
import { SharedActions } from '@store/shared/actions';
import { PayIncomingActions } from '../../store/actions';
import { PayIncomingSelectors } from '../../store/selectors';

@Component({
  selector: 'app-incoming-list',
  templateUrl: './incoming-list.component.html',
  styleUrls: ['./incoming-list.component.scss'],
})
export class IncomingListComponent implements OnInit {
  constructor(private store: Store, private resizeService: ResizeService) {}

  transactions$ = this.store.select(PayIncomingSelectors.transactions);
  isLoadingList$ = this.store.select(PayIncomingSelectors.isLoadingList);
  filter$ = this.store.select(PayIncomingSelectors.filter);
  isMobile$ = this.resizeService.isMobile$;
  ngOnInit(): void {}

  selectTransaction(transaction: Transaction): void {
    this.store.dispatch(PayIncomingActions.selectTransaction({ transaction }));
  }

  printTransaction(transaction: Transaction): void {
    this.store.dispatch(PayIncomingActions.printTransactionsRequest([transaction]));
  }

  showTransaction(transaction: Transaction, transactions: Transaction[]): void {
    this.store.dispatch(PayIncomingActions.showTransaction({ transaction, transactions }));
  }

  trackId(index: number, transaction: UiTransaction): string | undefined {
    return transaction ? `${transaction.id}` : undefined;
  }
}
