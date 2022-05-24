import { Component, OnDestroy, OnInit } from '@angular/core';
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
  constructor(private store: Store) {}

  isLoading$ = this.store.select(PayListSelectors.isLoading);
  ngOnInit(): void {
    this.store.addReducer(PAY_LIST_KEY, payListReducer);
    this.store.dispatch(PayListActions.init());
  }

  ngOnDestroy(): void {
    console.log('destroy');
    this.store.dispatch(PayListActions.destroy());
    this.store.removeReducer(PAY_LIST_KEY as never);
  }
}
