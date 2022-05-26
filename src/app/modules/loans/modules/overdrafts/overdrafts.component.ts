import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { OverdraftsActions } from './store/actions';
import { overdraftsReducer } from './store/reducer';
import { OverdraftsSelectors } from './store/selectors';
import { OVERDRAFTS_KEY } from './store/store';

@Component({
  selector: 'app-overdrafts',
  templateUrl: './overdrafts.component.html',
  styleUrls: ['./overdrafts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OverdraftsComponent implements OnInit {
  isLoading$: Observable<boolean> = this.store.select(OverdraftsSelectors.isLoading);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.addReducer(OVERDRAFTS_KEY, overdraftsReducer);
    this.store.dispatch(OverdraftsActions.init());
    this.store.dispatch(OverdraftsActions.loadOverdraftsRequest());
  }

  ngOnDestroy(): void {
    this.store.removeReducer(OVERDRAFTS_KEY as never);
    this.store.dispatch(OverdraftsActions.destroy());
  }
}
