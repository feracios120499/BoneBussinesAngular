import { Injectable } from '@angular/core';
import { LimitType } from '@b1-types/limit-type.type';
import { CardAccount } from '@models/cards/card-account.model';
import { CardDetails } from '@models/cards/card-details.model';
import { CardLimit } from '@models/cards/card-limit.model';
import { CardSmsStatus } from '@models/cards/card-sms-status.model';
import { FileModel } from '@models/file.model';
import { Store } from '@ngrx/store';
import { AppSelectors } from '@store/app/selectors';
import { Dayjs } from 'dayjs';
import { Observable } from 'rxjs';
import { BaseCardsService } from './base-cards.service';
import { DemoCardsService } from './demo-cards.service';
import { HttpCardsService } from './http-cards.service';

@Injectable({
  providedIn: 'root',
})
export class CardsService implements BaseCardsService {
  private cardsService: BaseCardsService;

  constructor(demoCardsService: DemoCardsService, httpCardsService: HttpCardsService, private store: Store) {
    this.cardsService = httpCardsService;
    this.store.select(AppSelectors.isDemo).subscribe((isDemo) => {
      if (isDemo) {
        this.cardsService = demoCardsService;
      } else {
        this.cardsService = httpCardsService;
      }
    });
  }

  getCardAccounts(clientId: string): Observable<CardAccount[]> {
    return this.cardsService.getCardAccounts(clientId);
  }

  getCardDetails(cardId: string, accountId: number, clientId: string): Observable<CardDetails> {
    return this.cardsService.getCardDetails(cardId, accountId, clientId);
  }

  getCardLimits(cardId: string, clientId: string): Observable<CardLimit[]> {
    return this.cardsService.getCardLimits(cardId, clientId);
  }

  getCardSmsStatus(cardId: string, clientId: string): Observable<CardSmsStatus> {
    return this.cardsService.getCardSmsStatus(cardId, clientId);
  }

  setDefaultLimit(cardId: string, limitType: LimitType, clientId: string): Observable<void> {
    return this.cardsService.setDefaultLimit(cardId, limitType, clientId);
  }

  updateLimit(cardId: string, limit: CardLimit, clientId: string): Observable<void> {
    return this.cardsService.updateLimit(cardId, limit, clientId);
  }

  updateSmsStatus(cardId: string, phoneNumber: string, isEnabled: boolean, clientId: string): Observable<void> {
    return this.cardsService.updateSmsStatus(cardId, phoneNumber, isEnabled, clientId);
  }

  lockCard(cardId: string, message: string | undefined, clientId: string): Observable<void> {
    return this.cardsService.lockCard(cardId, message, clientId);
  }

  unlockCard(cardId: string, clientId: string): Observable<void> {
    return this.cardsService.unlockCard(cardId, clientId);
  }

  getStatement(
    cardId: string,
    clientId: string,
    start: Dayjs,
    end: Dayjs,
    format: string = 'PDF'
  ): Observable<FileModel> {
    return this.cardsService.getStatement(cardId, clientId, start, end, format);
  }

  sendStatement(
    cardId: string,
    clientId: string,
    start: Dayjs,
    end: Dayjs,
    format: string = 'PDF',
    email: string
  ): Observable<never> {
    return this.cardsService.sendStatement(cardId, clientId, start, end, format, email);
  }
}
