import { Component, OnInit } from '@angular/core';
import { UiCardAccount } from '@models/cards/card-account.model';
import { CardsSelectors } from '@modules/cards/store/selectors';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss'],
})
export class CardsListComponent implements OnInit {
  constructor(private store: Store) {}

  cardAccounts$ = this.store.select(CardsSelectors.uiCardAccountsSelector);
  isLoading$ = this.store.select(CardsSelectors.isLoading);

  ngOnInit(): void {}

  trackId(index: number, cardAccount: UiCardAccount): string | undefined {
    return cardAccount ? `${cardAccount.id}.${index}` : undefined;
  }
}
