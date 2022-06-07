import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { PaymentStatuses } from '@modules/payments/models/payment-status.type';
import { Store } from '@ngrx/store';
import { PayListActions } from './store/actions';
import { payListReducer } from './store/reducer';
import { PayListSelectors } from './store/selectors';
import { PAY_LIST_KEY } from './store/store';

@Component({
  selector: 'app-payments-list',
  templateUrl: './payments-list.component.html',
  styleUrls: ['./payments-list.component.scss'],
})
export class PaymentsListComponent implements OnInit, OnDestroy {
  constructor(private store: Store, private location: Location) {}

  isLoading$ = this.store.select(PayListSelectors.isLoading);
  paymentsSum$ = this.store.select(PayListSelectors.paymentsSum);
  selectedPaymentsSum$ = this.store.select(PayListSelectors.selectedPaymentSum);
  ngOnInit(): void {
    this.store.addReducer(PAY_LIST_KEY, payListReducer);
    this.store.dispatch(PayListActions.init());
    const state = this.location.getState() as any;
    if (state && state.tab) {
      this.store.dispatch(PayListActions.setTab({ tab: state.tab as unknown as PaymentStatuses }));
    } else {
      this.store.dispatch(PayListActions.setTab({ tab: 'ONMYSIGN' }));
    }
  }

  ngOnDestroy(): void {
    console.log('destroy');
    this.store.dispatch(PayListActions.destroy());
    this.store.removeReducer(PAY_LIST_KEY as never);
  }
}
