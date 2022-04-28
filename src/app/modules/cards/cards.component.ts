import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CardsActions } from '@store/cards/actions';
import { cardsReducer } from '@store/cards/reducer';
import { CardsSelectors } from '@store/cards/selectors';
import { CARDS_KEY } from '@store/cards/store';
import { of } from 'rxjs';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit, OnDestroy {
  constructor(private store: Store) {}

  isLoadingCards$ = this.store.select(CardsSelectors.isLoading);
  ngOnInit(): void {
    this.store.addReducer(CARDS_KEY, cardsReducer);
    this.store.dispatch(CardsActions.loadCardAccountsRequest());
  }

  ngOnDestroy(): void {
    this.store.removeReducer(CARDS_KEY as never);
  }
}
