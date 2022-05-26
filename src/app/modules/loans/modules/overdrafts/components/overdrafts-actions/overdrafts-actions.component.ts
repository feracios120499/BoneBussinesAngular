import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { OverdraftsActions } from '../../store/actions';
import { OverdraftsSelectors } from '../../store/selectors';

@Component({
  selector: 'app-overdrafts-actions',
  templateUrl: './overdrafts-actions.component.html',
  styleUrls: ['./overdrafts-actions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OverdraftsActionsComponent {
  filterTerm$: Observable<string> = this.store.select(OverdraftsSelectors.filterTerm);

  constructor(private store: Store) {}

  onOverdraftsFilter(term: string): void {
    this.store.dispatch(OverdraftsActions.filterOverdrafts({ term }));
  }
}
