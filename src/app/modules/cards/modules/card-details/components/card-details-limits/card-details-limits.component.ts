import { Component, OnInit } from '@angular/core';
import { CardLimit } from '@models/cards/card-limit.model';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { SharedActions } from '@store/shared/actions';
import { CardDetailsActions } from '../../store/actions';
import { CardDetailsSelectors } from '../../store/selectors';

@Component({
  selector: 'app-card-details-limits',
  templateUrl: './card-details-limits.component.html',
  styleUrls: ['./card-details-limits.component.scss'],
})
export class CardDetailsLimitsComponent implements OnInit {
  constructor(private store: Store, private translateService: TranslateService) {}

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
          callbackSave: (updatedLimit) => this.store.dispatch(CardDetailsActions.updateLimitRequest(updatedLimit)),
        },
      })
    );
  }

  setDefaultLimit(limit: CardLimit): void {
    this.store.dispatch(
      SharedActions.showConfirm({
        config: {
          text: this.translateService.instant('components.corpcard.limitDefaultConfirm'),
          callback: () => this.store.dispatch(CardDetailsActions.setDefaultLimitRequest(limit)),
        },
      })
    );
  }
}
