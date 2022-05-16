import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppActions } from '@store/app/actions';
import { CardDetailsActions } from './store/actions';
import { cardDetailsReducer } from './store/reducer';
import { CardDetailsSelectors } from './store/selectors';
import { CARD_DETAILS_KEY } from './store/store';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss'],
})
export class CardDetailsComponent implements OnInit, OnDestroy {
  constructor(private store: Store) {}
  currentTab$ = this.store.select(CardDetailsSelectors.currentTab);
  ngOnInit(): void {
    this.store.addReducer(CARD_DETAILS_KEY, cardDetailsReducer);
    this.store.dispatch(CardDetailsActions.loadData());
    this.store.dispatch(AppActions.setPageLoader({ loader: CardDetailsSelectors.isLoading }));
  }

  ngOnDestroy(): void {
    this.store.dispatch(AppActions.setPageLoader({}));
    this.store.removeReducer(CARD_DETAILS_KEY as never);
  }
}
