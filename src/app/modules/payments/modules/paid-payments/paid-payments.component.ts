import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppActions } from '@store/app/actions';
import { PayListActions } from '../payments-list/store/actions';
import { payListReducer } from '../payments-list/store/reducer';
import { PayListSelectors } from '../payments-list/store/selectors';
import { PAY_LIST_KEY } from '../payments-list/store/store';

@Component({
  selector: 'app-paid-payments',
  templateUrl: './paid-payments.component.html',
  styleUrls: ['./paid-payments.component.scss'],
})
export class PaidPaymentsComponent implements OnInit, OnDestroy {
  constructor(private store: Store) {}

  isLoading$ = this.store.select(PayListSelectors.isLoading);
  paymentsSum$ = this.store.select(PayListSelectors.paymentsSum);
  selectedPaymentsSum$ = this.store.select(PayListSelectors.selectedPaymentSum);
  ngOnInit(): void {
    this.store.addReducer(PAY_LIST_KEY, payListReducer);
    this.store.dispatch(PayListActions.init());
    this.store.dispatch(PayListActions.setTab({ tab: 'BANKPAID' }));
  }

  ngOnDestroy(): void {
    this.store.dispatch(PayListActions.destroy());
    this.store.dispatch(AppActions.removeStore({ storeKey: PAY_LIST_KEY }));
    //this.store.removeReducer(PAY_LIST_KEY as never);
  }
}
