import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LimitType } from '@b1-types/limit-type.type';
import { CardAccount } from '@models/cards/card-account.model';
import { CardDetails } from '@models/cards/card-details.model';
import { CardLimit } from '@models/cards/card-limit.model';
import { CardSmsStatus } from '@models/cards/card-sms-status.model';
import { BaseService } from '@services/base.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CardsService extends BaseService {
  /**
   *
   */
  constructor(private http: HttpClient) {
    super();
  }

  getCardAccounts(clientId: string): Observable<CardAccount[]> {
    return this.http.get<CardAccount[]>(`api/v1/acct/corpcards/${clientId}`);
  }

  getCardDetails(
    cardId: string,
    accountId: number,
    clientId: string
  ): Observable<CardDetails> {
    return this.http.get<CardDetails>(
      `api/v1/acct/corpcards/${cardId}/${clientId}/${accountId}`
    );
  }

  getCardLimits(cardId: string, clientId: string): Observable<CardLimit[]> {
    return this.http.get<CardLimit[]>(
      `api/v1/acct/corpcards/limits/${cardId}/${clientId}`
    );
  }

  getCardSmsStatus(
    cardId: string,
    clientId: string
  ): Observable<CardSmsStatus> {
    return this.http.get<CardSmsStatus>(
      `api/v1/acct/corpcards/smsinfo/${cardId}/${clientId}`
    );
  }

  setDefaultLimit(
    cardId: string,
    limitType: LimitType,
    clientId: string
  ): Observable<void> {
    return this.http.put<void>(
      `api/v1/acct/corpcards/limits/default/${cardId}/${limitType}/${clientId}`,
      {}
    );
  }

  updateLimit(
    cardId: string,
    limit: CardLimit,
    clientId: string
  ): Observable<void> {
    return this.http.put<void>(
      `api/v1/acct/corpcards/limits/${cardId}/${limit.type}/${clientId}`,
      limit
    );
  }

  updateSmsStatus(
    cardId: string,
    phoneNumber: string,
    isEnabled: boolean,
    clientId: string
  ): Observable<void> {
    return this.http.put<void>(
      `api/v1/acct/corpcards/smsService/${cardId}/${clientId}`,
      { phoneNumber, isEnabled }
    );
  }

  lockCard(
    cardId: string,
    message: string | undefined,
    clientId: string
  ): Observable<void> {
    return this.http.put<void>(
      `api/v1/acct/corpcards/lock/${cardId}/${clientId}`,
      {
        message,
      }
    );
  }

  unlockCard(cardId: string, clientId: string): Observable<void> {
    return this.http.put<void>(
      `api/v1/acct/corpcards/unlock/${cardId}/${clientId}`,
      {}
    );
  }
}
