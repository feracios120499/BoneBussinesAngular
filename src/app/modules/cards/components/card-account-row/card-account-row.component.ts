import { Component, Input, OnInit } from '@angular/core';
import { UiCardAccount } from '@models/cards/card-account.model';
import { Store } from '@ngrx/store';
import { CardsActions } from '@store/cards/actions';
import { CardsSelectors } from '@store/cards/selectors';

@Component({
  selector: 'app-card-account-row',
  templateUrl: './card-account-row.component.html',
  styleUrls: ['./card-account-row.component.scss'],
})
export class CardAccountRowComponent implements OnInit {
  constructor(private store: Store) {}

  @Input() cardAccount!: UiCardAccount;

  viewState$ = this.store.select(CardsSelectors.viewStateSelector);
  ngOnInit(): void {}

  toggleCardAccount(): void {
    if (this.cardAccount.isOpen) {
      this.store.dispatch(
        CardsActions.closeCardAccount({ cardAccount: this.cardAccount })
      );
    } else {
      this.store.dispatch(
        CardsActions.openCardAccount({ cardAccount: this.cardAccount })
      );
    }
  }

  goToDetails(cardId: string, accountId: number): void {
    this.store.dispatch(CardsActions.goToDetail({ cardId, accountId }));
  }
}
