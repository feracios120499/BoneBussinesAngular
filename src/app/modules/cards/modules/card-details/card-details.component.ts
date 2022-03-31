import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CardDetailsActions } from '@store/cards/details/actions';
import { cardDetailsReducer } from '@store/cards/details/reducer';
import { CardDetailsSelectors } from '@store/cards/details/selectors';
import { CARD_DETAILS_KEY } from '@store/cards/details/store';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss'],
})
export class CardDetailsComponent implements OnInit, OnDestroy {
  constructor(private store: Store) { }
  currentTab$ = this.store.select(CardDetailsSelectors.currentTab);
  ngOnInit(): void {
    this.store.addReducer(CARD_DETAILS_KEY, cardDetailsReducer);
    this.store.dispatch(CardDetailsActions.loadData());
  }

  ngOnDestroy(): void {
    this.store.removeReducer(CARD_DETAILS_KEY as never);
  }
}
