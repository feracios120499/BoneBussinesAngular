import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { DepositsActions } from './store/actions';
import { depositsReducer } from './store/reducer';
import { DepositsSelectors } from './store/selectors';
import { DEPOSITS_KEY } from './store/store';

@Component({
  selector: 'app-deposits',
  templateUrl: './deposits.component.html',
  styleUrls: ['./deposits.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DepositsComponent {
  isLoading$: Observable<boolean> = this.store.select(DepositsSelectors.isLoading);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.addReducer(DEPOSITS_KEY, depositsReducer);
    this.store.dispatch(DepositsActions.init());
    this.store.dispatch(DepositsActions.loadDepositsRequest());
  }

  ngOnDestroy(): void {
    this.store.removeReducer(DEPOSITS_KEY as never);
    this.store.dispatch(DepositsActions.destroy());
  }
}
