import { Injectable } from '@angular/core';
import { CardReissueStatus } from '@b1-types/cards/card-reissue-status.type';
import { CardResponseResult } from '@models/cards/card-response-result.model';
import { ReissueApplicationDetails } from '@models/cards/reissue-application-details.model';
import { ReissueApplication } from '@models/cards/reissue-application.model';
import { ReissueApplicationsCount } from '@models/cards/reissue-applications-count.model';
import { ReissueHistory } from '@models/cards/reissue-history.model';
import { DemoError } from '@models/errors/demo-error.model';
import { StatusCount } from '@models/status-count.model';
import { Observable, of, throwError } from 'rxjs';
import { BaseReissueApplicationService } from './base-reissue-application.service';

@Injectable({
  providedIn: 'root',
})
export class DemoReissueApplicationService extends BaseReissueApplicationService {
  private reissueApplications: ReissueApplicationDetails[] = [
    {
      id: 185,
      statusCode: 'BANKRECEIVED',
      newExpiredDate: '11/22',
      // clientId: 'fbbe2e3b-d9eb-4039-918b-4d1f87e49024',
      createDate: new Date('2022-04-27T22:58:26'),
      isNeedMySign: false,
      isNeedSign: false,
      visaStampCount: 1,
      accountId: 2551383301,
      accountNumber: 'UA793004650000026007340907973',
      cardId: 'c6eeb389-5fca-4969-e053-0a1f14ac0006',
      cardNumber: '911111******1111',
      cardType: 'Prostir',
      cardOwnerName: 'Han Solo',
      cardExpired: '11/20',
    },
    {
      id: 186,
      statusCode: 'BANKRECEIVED',
      newExpiredDate: '08/22',
      // clientId: 'fbbe2e3b-d9eb-4039-918b-4d1f87e49024',
      createDate: new Date('2022-04-27T23:07:03'),
      isNeedMySign: false,
      isNeedSign: false,
      visaStampCount: 1,
      accountId: 2551383301,
      accountNumber: 'UA793004650000026007340907973',
      cardId: 'c6eeb389-5fcb-4969-e053-0a1f14ac0006',
      cardNumber: '222222******2222',
      cardType: 'MasterCard',
      cardOwnerName: 'Padme Amidala Naberrie',
      cardExpired: '08/20',
    },
    {
      id: 187,
      statusCode: 'BANKRECEIVED',
      newExpiredDate: '12/22',
      // clientId: 'fbbe2e3b-d9eb-4039-918b-4d1f87e49024',
      createDate: new Date('2022-04-28T23:40:00'),
      isNeedMySign: false,
      isNeedSign: false,
      visaStampCount: 1,
      accountId: 2551383301,
      accountNumber: 'UA793004650000026007340907973',
      cardId: 'c6eeb389-5fcc-4969-e053-0a1f14ac0006',
      cardNumber: '477777******7777',
      cardType: 'Visa',
      cardOwnerName: 'Obi-Wan Kenobi',
      cardExpired: '12/20',
    },
  ];

  private applicationCount: ReissueApplicationsCount[] = [
    {
      statusId: 'BANKRECEIVED',
      statusCount: 3,
    },
    // {
    //   statusId: 'BANKPAID',
    //   statusCount: 0,
    // },
    {
      statusId: 'BANKSEND',
      statusCount: 0,
    },
    {
      statusId: 'ONMYSIGN',
      statusCount: 0,
    },
    {
      statusId: 'BANKERROR',
      statusCount: 0,
    },
    {
      statusId: 'SIGNED',
      statusCount: 0,
    },
    // {
    //   statusId: 'NEW',
    //   statusCount: 0,
    // },
    {
      statusId: 'ONSIGN',
      statusCount: 0,
    },
    {
      statusId: 'DELETED',
      statusCount: 0,
    },
  ];

  private reissueHistories: (ReissueHistory & { applicationId: number })[] = [
    {
      id: 250,
      applicationId: 185,
      statusId: 'BANKRECEIVED',
      statusChangeDate: new Date('2022-04-27T23:10:46'),
      userName: 'Дарт Вейдер',
      statusChangeMessage: 'Отримано банком',
    },
    {
      id: 249,
      applicationId: 185,
      statusId: 'BANKSEND',
      statusChangeDate: new Date('2022-04-27T23:10:46'),
      userName: 'Дарт Вейдер',
      statusChangeMessage: 'Відправлено у банк',
    },
    {
      id: 244,
      applicationId: 185,
      statusId: 'SIGNED',
      statusChangeDate: new Date('2022-04-27T23:07:10'),
      userName: 'Дарт Вейдер',
      statusChangeMessage: 'Підписано всіма користувачами',
    },
    {
      id: 243,
      applicationId: 185,
      statusId: 'ONSIGN',
      statusChangeDate: new Date('2022-04-27T23:07:10'),
      userName: 'Дарт Вейдер',
      statusChangeMessage: 'Підписано підписом № 1 користувачем Дарт Вейдер',
    },
    {
      id: 238,
      applicationId: 185,
      statusId: 'ONSIGN',
      statusChangeDate: new Date('2022-04-27T22:58:26'),
      userName: 'Дарт Вейдер',
      statusChangeMessage: 'Відправлено на підпис',
    },
    {
      id: 237,
      applicationId: 185,
      statusId: 'NEW',
      statusChangeDate: new Date('2022-04-27T22:58:26'),
      userName: 'Дарт Вейдер',
      statusChangeMessage: 'Створено новий запит',
    },
    {
      id: 248,
      applicationId: 186,
      statusId: 'BANKRECEIVED',
      statusChangeDate: new Date('2022-04-27T23:10:46'),
      userName: 'Дарт Вейдер',
      statusChangeMessage: 'Отримано банком',
    },
    {
      id: 247,
      applicationId: 186,
      statusId: 'BANKSEND',
      statusChangeDate: new Date('2022-04-27T23:10:42'),
      userName: 'Дарт Вейдер',
      statusChangeMessage: 'Відправлено у банк',
    },
    {
      id: 246,
      applicationId: 186,
      statusId: 'SIGNED',
      statusChangeDate: new Date('2022-04-27T23:10:38'),
      userName: 'Дарт Вейдер',
      statusChangeMessage: 'Підписано всіма користувачами',
    },
    {
      id: 245,
      applicationId: 186,
      statusId: 'ONSIGN',
      statusChangeDate: new Date('2022-04-27T23:10:38'),
      userName: 'Дарт Вейдер',
      statusChangeMessage: 'Підписано підписом № 1 користувачем Дарт Вейдер',
    },
    {
      id: 242,
      applicationId: 186,
      statusId: 'ONSIGN',
      statusChangeDate: new Date('2022-04-27T23:07:03'),
      userName: 'Дарт Вейдер',
      statusChangeMessage: 'Відправлено на підпис',
    },
    {
      id: 241,
      applicationId: 186,
      statusId: 'NEW',
      statusChangeDate: new Date('2022-04-27T23:07:03'),
      userName: 'Дарт Вейдер',
      statusChangeMessage: 'Створено новий запит',
    },
    {
      id: 256,
      applicationId: 187,
      statusId: 'BANKRECEIVED',
      statusChangeDate: new Date('2022-04-28T23:46:00'),
      userName: 'Дарт Вейдер',
      statusChangeMessage: 'Отримано банком',
    },
    {
      id: 255,
      applicationId: 187,
      statusId: 'BANKSEND',
      statusChangeDate: new Date('2022-04-28T23:45:00'),
      userName: 'Дарт Вейдер',
      statusChangeMessage: 'Відправлено у банк',
    },
    {
      id: 254,
      applicationId: 187,
      statusId: 'SIGNED',
      statusChangeDate: new Date('2022-04-28T23:44:00'),
      userName: 'Дарт Вейдер',
      statusChangeMessage: 'Підписано всіма користувачами',
    },
    {
      id: 253,
      applicationId: 187,
      statusId: 'ONSIGN',
      statusChangeDate: new Date('2022-04-28T23:43:00'),
      userName: 'Дарт Вейдер',
      statusChangeMessage: 'Підписано підписом № 1 користувачем Дарт Вейдер',
    },
    {
      id: 252,
      applicationId: 187,
      statusId: 'ONSIGN',
      statusChangeDate: new Date('2022-04-28T23:40:00'),
      userName: 'Дарт Вейдер',
      statusChangeMessage: 'Відправлено на підпис',
    },
    {
      id: 251,
      applicationId: 187,
      statusId: 'NEW',
      statusChangeDate: new Date('2022-04-28T23:40:00'),
      userName: 'Дарт Вейдер',
      statusChangeMessage: 'Створено новий запит',
    },
  ];

  createApplication(application: ReissueApplication, clientId: string): Observable<ReissueApplicationDetails> {
    return throwError(new DemoError());
  }

  getApplication(applicationId: number, clientId: string): Observable<ReissueApplicationDetails> {
    return of(this.reissueApplications.find(({ id }) => id === applicationId)!);
  }

  getLastApplication(cardId: string, clientId: string): Observable<ReissueApplicationDetails | undefined> {
    const applications: ReissueApplicationDetails[] = this.reissueApplications
      .filter((item: ReissueApplicationDetails) => item.cardId === cardId)
      .sort((a, b) => +a.createDate - +b.createDate);
    return of(applications.length ? applications[applications.length - 1] : undefined);
  }

  getCount(clientId: string): Observable<StatusCount> {
    const count: StatusCount = {};
    this.applicationCount.forEach((item) => (count[item.statusId] = item.statusCount));
    return of(count);
  }

  getHistory(applicationId: number, clientId: string): Observable<ReissueHistory[]> {
    return of(
      this.reissueHistories
        .filter((item) => item.applicationId === applicationId)
        .map(({ applicationId, ...rest }) => rest)
    );
  }

  getApplications(status: CardReissueStatus, clientId: string): Observable<ReissueApplicationDetails[]> {
    return of(
      this.reissueApplications
        .filter(({ statusCode, isNeedMySign }) =>
          status === 'ONMYSIGN' ? statusCode === 'ONSIGN' && isNeedMySign : statusCode === status
        )
        .sort((a, b) => +a.createDate - +b.createDate)
        .reverse()
    );
  }

  removeApplications(ids: number[], clientId: string): Observable<CardResponseResult[]> {
    return throwError(new DemoError());
  }

  sendToBank(ids: number[], clientId: string): Observable<CardResponseResult[]> {
    return throwError(new DemoError());
  }
}
