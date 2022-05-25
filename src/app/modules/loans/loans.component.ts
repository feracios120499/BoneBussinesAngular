import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { LoansActions } from './store/actions';
import { LoansSelectors } from './store/selectors';
import { LOANS_KEY } from './store/store';
import { loansReducer } from './store/reducer';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoansComponent implements OnInit {
  title$: Observable<string> = this.store.select(LoansSelectors.pageTitle);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.addReducer(LOANS_KEY, loansReducer);
    this.store.dispatch(LoansActions.init());
    this.store.dispatch(LoansActions.loadLoansRequest());
  }

  ngOnDestroy(): void {
    this.store.removeReducer(LOANS_KEY as never);
    this.store.dispatch(LoansActions.destroy());
  }
}
