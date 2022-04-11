import { Component, OnInit } from '@angular/core';
import { CardLimit } from '@models/cards/card-limit.model';
import { Store } from '@ngrx/store';
import { CardDetailsActions } from '@store/cards/details/actions';
import { CardDetailsSelectors } from '@store/cards/details/selectors';
import { SharedActions } from '@store/shared/actions';

@Component({
  selector: 'app-card-details-limits',
  templateUrl: './card-details-limits.component.html',
  styleUrls: ['./card-details-limits.component.scss'],
})
export class CardDetailsLimitsComponent implements OnInit {
  constructor(private store: Store) {}

  limits$ = this.store.select(CardDetailsSelectors.limits);
  cardCurrency$ = this.store.select(CardDetailsSelectors.cardCurrency);
  isLimitsLoading = this.store.select(CardDetailsSelectors.isLimitsLoading);
  isLimitEditable$ = this.store.select(CardDetailsSelectors.isLimitEditable);

  ngOnInit(): void {}

  editLimit(limit: CardLimit): void {
    this.store.dispatch(
      CardDetailsActions.openEditLimitModal({
        config: {
          limit,
          callbackSave: (updatedLimit) =>
            this.store.dispatch(
              CardDetailsActions.updateLimitRequest(updatedLimit)
            ),
        },
      })
    );
  }

  setDefaultLimit(limit: CardLimit): void {
    this.store.dispatch(
      SharedActions.showConfirm({
        config: {
          text: 'test',
          callback: () =>
            this.store.dispatch(
              CardDetailsActions.setDefaultLimitRequest(limit)
            ),
        },
      })
    );
  }
}
