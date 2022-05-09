import { Injectable } from '@angular/core';
import { LimitType } from '@b1-types/limit-type.type';
import { CardAccount } from '@models/cards/card-account.model';
import { CardDetails } from '@models/cards/card-details.model';
import { CardLimit } from '@models/cards/card-limit.model';
import { CardSmsStatus } from '@models/cards/card-sms-status.model';
import { DemoError } from '@models/errors/demo-error.model';
import { FileModel } from '@models/file.model';
import { Dayjs } from 'dayjs';
import { Observable, of, throwError } from 'rxjs';
import { BaseCardsService } from './base-cards.service';

@Injectable({
  providedIn: 'root',
})
export class DemoCardsService extends BaseCardsService {
  private cardAccounts: CardAccount[] = [
    {
      id: 2551383301,
      number: 'UA793004650000026007340907973',
      currency: 'UAH',
      cards: [
        {
          id: 'c6eeb389-5fca-4969-e053-0a1f14ac0006',
          number: '911111******1111',
          accountNumber: 'UA793004650000026007340907973',
          name: 'Хан Соло',
          fullNameEng: 'Han Solo',
          isAbleToReissue: true,
          expired: '11/20',
          type: 'Prostir',
          status: 'Undefined',
          plasticStatus: 'Active',
        },
        {
          id: 'c6eeb389-5fcb-4969-e053-0a1f14ac0006',
          number: '222222******2222',
          accountNumber: 'UA793004650000026007340907973',
          name: 'Падме Амідала Наберрі',
          fullNameEng: 'Padme Amidala Naberrie',
          isAbleToReissue: true,
          expired: '08/20',
          type: 'MasterCard',
          status: 'Undefined',
          plasticStatus: 'Active',
        },
        {
          id: 'c6eeb389-5fcc-4969-e053-0a1f14ac0006',
          number: '477777******7777',
          accountNumber: 'UA793004650000026007340907973',
          name: ' Обі-Ван Кенобі',
          fullNameEng: 'Obi-Wan Kenobi',
          isAbleToReissue: true,
          expired: '11/21',
          type: 'Visa',
          status: 'Undefined',
          plasticStatus: 'NotActive',
        },
      ],
    },
  ];

  private cardDetails: CardDetails[] = [
    {
      availableAmount: 44,
      holdAmount: 30000,
      depositAmount: 10000,
      currency: 'UAH',
      accountId: 2551383301,
      bankId: '300465',
      statementTypesList: ['HTML'],
      isStatementFree: false,
      id: 'c6eeb389-5fca-4969-e053-0a1f14ac0006',
      number: '911111******1111',
      accountNumber: 'UA793004650000026007340907973',
      name: 'Хан Соло',
      fullNameEng: 'Han Solo',
      isAbleToReissue: true,
      expired: '11/20',
      type: 'Prostir',
      status: 'Active',
      plasticStatus: 'NotActive',
    },
    {
      availableAmount: 44,
      holdAmount: 30000,
      depositAmount: 10000,
      currency: 'UAH',
      accountId: 2551383301,
      bankId: '300465',
      statementTypesList: ['HTML'],
      isStatementFree: false,
      id: 'c6eeb389-5fcb-4969-e053-0a1f14ac0006',
      number: '222222******2222',
      accountNumber: 'UA793004650000026007340907973',
      name: 'Падме Амідала Наберрі',
      fullNameEng: 'Padme Amidala Naberrie',
      isAbleToReissue: true,
      expired: '08/20',
      type: 'MasterCard',
      status: 'Active',
      plasticStatus: 'Active',
    },
    {
      availableAmount: 44,
      holdAmount: 30000,
      depositAmount: 10000,
      currency: 'UAH',
      accountId: 2551383301,
      bankId: '300465',
      statementTypesList: ['HTML'],
      isStatementFree: false,
      id: 'c6eeb389-5fcc-4969-e053-0a1f14ac0006',
      number: '477777******7777',
      accountNumber: 'UA793004650000026007340907973',
      name: 'Обі-Ван Кенобі',
      fullNameEng: 'Obi-Wan Kenobi',
      isAbleToReissue: true,
      expired: '11/21',
      type: 'Visa',
      status: 'Active',
      plasticStatus: 'NotActive',
    },
  ];

  private cardLimits: { cardId: string; limits: CardLimit[] }[] = [
    {
      cardId: 'c6eeb389-5fca-4969-e053-0a1f14ac0006',
      limits: [
        {
          type: 'ATM',
          value: 90000000,
          isActive: true,
          status: 'Suspended',
        },
        {
          type: 'Internet',
          value: 90000000,
          isActive: true,
          status: 'Active',
        },
        {
          type: 'Retail',
          value: 90000000,
          isActive: true,
          status: 'Active',
        },
        {
          type: 'Hotel',
          value: 90000000,
          isActive: true,
          status: 'Override',
        },
        {
          type: 'P2P',
          value: 90000000,
          isActive: true,
          status: 'Active',
        },
      ],
    },
    {
      cardId: 'c6eeb389-5fcb-4969-e053-0a1f14ac0006',
      limits: [
        {
          type: 'ATM',
          value: 90000000,
          isActive: true,
          status: 'Suspended',
        },
        {
          type: 'Internet',
          value: 90000000,
          isActive: true,
          status: 'Active',
        },
        {
          type: 'Retail',
          value: 90000000,
          isActive: true,
          status: 'Active',
        },
        {
          type: 'Hotel',
          value: 90000000,
          isActive: true,
          status: 'Override',
        },
        {
          type: 'P2P',
          value: 90000000,
          isActive: true,
          status: 'Active',
        },
      ],
    },
    {
      cardId: 'c6eeb389-5fcc-4969-e053-0a1f14ac0006',
      limits: [
        {
          type: 'ATM',
          value: 90000000,
          isActive: true,
          status: 'Suspended',
        },
        {
          type: 'Internet',
          value: 90000000,
          isActive: true,
          status: 'Active',
        },
        {
          type: 'Retail',
          value: 90000000,
          isActive: true,
          status: 'Active',
        },
        {
          type: 'Hotel',
          value: 90000000,
          isActive: true,
          status: 'Override',
        },
        {
          type: 'P2P',
          value: 90000000,
          isActive: true,
          status: 'Active',
        },
      ],
    },
  ];

  private cardSmsStatuses: { cardId: string; smsStatus: CardSmsStatus }[] = [
    {
      cardId: 'c6eeb389-5fca-4969-e053-0a1f14ac0006',
      smsStatus: {
        phoneNumber: '+380963334445',
        status: 'NotActive',
      },
    },
    {
      cardId: 'c6eeb389-5fcb-4969-e053-0a1f14ac0006',
      smsStatus: {
        phoneNumber: '+380963334445',
        status: 'NotActive',
      },
    },
    {
      cardId: 'c6eeb389-5fcc-4969-e053-0a1f14ac0006',
      smsStatus: {
        phoneNumber: '+380963334445',
        status: 'NotActive',
      },
    },
  ];

  getCardAccounts(clientId: string): Observable<CardAccount[]> {
    return of(this.cardAccounts);
  }

  getCardDetails(cardId: string, accountId: number, clientId: string): Observable<CardDetails> {
    return of(this.cardDetails.find(({ id }) => id === cardId)!);
  }

  getCardLimits(cardId: string, clientId: string): Observable<CardLimit[]> {
    return of(this.cardLimits.find((item) => item.cardId === cardId)!.limits);
  }

  getCardSmsStatus(cardId: string, clientId: string): Observable<CardSmsStatus> {
    return of(this.cardSmsStatuses.find((item) => item.cardId === cardId)!.smsStatus);
  }

  setDefaultLimit(cardId: string, limitType: LimitType, clientId: string): Observable<void> {
    return throwError(new DemoError());
  }

  updateLimit(cardId: string, limit: CardLimit, clientId: string): Observable<void> {
    return throwError(new DemoError());
  }

  updateSmsStatus(cardId: string, phoneNumber: string, isEnabled: boolean, clientId: string): Observable<void> {
    return throwError(new DemoError());
  }

  lockCard(cardId: string, message: string | undefined, clientId: string): Observable<void> {
    return throwError(new DemoError());
  }

  unlockCard(cardId: string, clientId: string): Observable<void> {
    return throwError(new DemoError());
  }

  getStatement(
    cardId: string,
    clientId: string,
    start: Dayjs,
    end: Dayjs,
    format: string = 'PDF'
  ): Observable<FileModel> {
    return throwError(new DemoError());
  }

  sendStatement(
    cardId: string,
    clientId: string,
    start: Dayjs,
    end: Dayjs,
    format: string = 'PDF',
    email: string
  ): Observable<never> {
    return throwError(new DemoError());
  }
}
