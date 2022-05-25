import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { LoansSelectors } from '../../../../store/selectors';
import { LoansActions } from '../../../../store/actions';

@Component({
  selector: 'app-loans-actions',
  templateUrl: './loans-actions.component.html',
  styleUrls: ['./loans-actions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoansActionsComponent {
  filterTerm$: Observable<string> = this.store.select(LoansSelectors.filterTerm);

  constructor(private store: Store) {}

  onLoansFilter(term: string): void {
    this.store.dispatch(LoansActions.filterLoans({ term }));
  }
}
