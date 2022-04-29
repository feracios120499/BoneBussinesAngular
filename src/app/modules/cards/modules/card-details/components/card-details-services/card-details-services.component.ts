import { Component, OnInit } from '@angular/core';
import { CardDetails } from '@models/cards/card-details.model';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { SharedActions } from '@store/shared/actions';
import { CardDetailsActions } from '../../store/actions';
import { CardDetailsSelectors } from '../../store/selectors';

@Component({
  selector: 'app-card-details-services',
  templateUrl: './card-details-services.component.html',
  styleUrls: ['./card-details-services.component.scss'],
})
export class CardDetailsServicesComponent implements OnInit {
  constructor(private store: Store, private translateService: TranslateService) {}

  card$ = this.store.select(CardDetailsSelectors.card);
  smsStatus$ = this.store.select(CardDetailsSelectors.smsStatus);
  isLoadingSms$ = this.store.select(CardDetailsSelectors.isSmsLoading);
  isCardLoading$ = this.store.select(CardDetailsSelectors.isCardLoading);
  lastApplication$ = this.store.select(CardDetailsSelectors.lastApplication);
  isAbleToReissue$ = this.store.select(CardDetailsSelectors.isAbleToReissue);
  isShowWarningReissue$ = this.store.select(CardDetailsSelectors.isShowWarningReissue);
  ngOnInit(): void {}

  showStatement(card: CardDetails): void {
    this.store.dispatch(CardDetailsActions.showStatementModal({ card }));
  }

  activateSms(cardId: string, phoneNumber: string): void {
    this.updateSmsStatus(cardId, phoneNumber, true);
  }
  disableSms(cardId: string, phoneNumber: string): void {
    this.updateSmsStatus(cardId, phoneNumber, false);
  }

  unlockCard(cardId: string): void {
    this.store.dispatch(
      SharedActions.showConfirm({
        config: {
          text: this.translateService.instant('components.corpcard.thisFunctionIsPayConfirmUnLock'),
          callback: () => this.store.dispatch(CardDetailsActions.unlockCardRequest({ cardId })),
        },
      })
    );
  }

  lockCard(cardId: string): void {
    this.store.dispatch(
      CardDetailsActions.showConfirmLockCard({
        config: {
          cardId,
          callback: (message) => this.store.dispatch(CardDetailsActions.lockCardRequest({ cardId, message })),
        },
      })
    );
  }

  reissueCard(card: CardDetails): void {
    this.store.dispatch(
      SharedActions.showConfirm({
        config: {
          text: this.translateService.instant('components.corpcard.confirm.reissue'),
          callback: () =>
            this.store.dispatch(
              CardDetailsActions.createReissueApplicationRequest({
                accountId: card.accountId,
                accountNumber: card.accountNumber,
                cardExpired: card.expired,
                cardId: card.id,
                cardNumber: card.number,
                cardOwnerName: card.fullNameEng,
                cardType: card.type,
              })
            ),
        },
      })
    );
  }

  private updateSmsStatus(cardId: string, phoneNumber: string, isEnabled: boolean): void {
    this.store.dispatch(
      SharedActions.showConfirm({
        config: {
          text: this.translateService.instant(
            isEnabled ? 'components.corpcard.confirm.activateSms' : 'components.corpcard.confirm.disableSms'
          ),
          callback: () =>
            this.store.dispatch(
              CardDetailsActions.updateSmsStatusRequest({
                cardId,
                phoneNumber,
                isEnabled,
              })
            ),
        },
      })
    );
  }
}
