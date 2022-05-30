import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { DepositsSelectors } from '@modules/deposits/store/selectors';
import { DepositsActions } from '@modules/deposits/store/actions';

@Component({
  selector: 'app-deposits-actions',
  templateUrl: './deposits-actions.component.html',
  styleUrls: ['./deposits-actions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DepositsActionsComponent {
  filterTerm$: Observable<string> = this.store.select(DepositsSelectors.filterTerm);

  constructor(private store: Store) {}

  onDepositsFilter(term: string): void {
    this.store.dispatch(DepositsActions.filterDeposits({ term }));
  }
}
