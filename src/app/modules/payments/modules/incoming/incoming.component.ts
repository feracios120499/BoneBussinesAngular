import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PayIncomingActions } from './store/actions';
import { payIncomingReducer } from './store/reducer';
import { PayIncomingSelectors } from './store/selectors';
import { PAY_INCOMING_KEY } from './store/store';

@Component({
  selector: 'app-incoming',
  templateUrl: './incoming.component.html',
  styleUrls: ['./incoming.component.scss'],
})
export class IncomingComponent implements OnInit, OnDestroy {
  constructor(private store: Store) {}

  isLoading$ = this.store.select(PayIncomingSelectors.isLoading);

  ngOnInit(): void {
    this.store.addReducer(PAY_INCOMING_KEY, payIncomingReducer);
    this.store.dispatch(PayIncomingActions.init());
  }

  ngOnDestroy(): void {
    this.store.dispatch(PayIncomingActions.destroy());
    this.store.removeReducer(PAY_INCOMING_KEY as never);
  }
}
