import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { BaseOverdraftsService } from './base-overdrafts.service';
import { Overdraft } from '../../models/overdraft.model';

@Injectable({
  providedIn: 'root',
})
export class DemoOverdraftsService extends BaseOverdraftsService {
  private overdrafts1: Overdraft[] = [];
  private overdrafts2: Overdraft[] = [
    {
      bankId: '302076',
      customerId: 100200,
      nd: 1000.08,
      accountId: 10008.85,
      accountNumber: '260012340011',
      currencyCode: 'UAH',
      contractNumber: '1111',
      contractDate: new Date('2020-05-03T00:00:00'),
      activeLimit: 511015555,
      rate: 10,
      maturityTDate: new Date('2020-05-20T00:00:00'),
      usedLimit: 175000,
      accruedInterest: 1700,
      commission: 1454.54,
      unusedLimit: 14458,
      overUsedLimit: 14540,
      overAccruedInterest: 1590,
      overCommission: 14440,
    },
    {
      bankId: '302078',
      customerId: 100201,
      nd: 1000.08,
      accountId: 10008.85,
      accountNumber: '260012340011',
      currencyCode: 'UAH',
      contractNumber: '581',
      contractDate: new Date('2020-05-03T00:00:00'),
      activeLimit: 5158850,
      rate: 12.5,
      maturityTDate: new Date('2020-11-20T00:00:00'),
      usedLimit: 17500,
      accruedInterest: 17000,
      commission: 1465.54,
      unusedLimit: 210058,
      overUsedLimit: 1150,
      overAccruedInterest: 1390,
      overCommission: 140,
    },
  ];

  private overdrafts: { [id: string]: Overdraft[] } = {
    '565bbaee-37a6-48ff-b3e8-f4822c23c5c1': this.overdrafts1,
    '565bbaee-37a6-48ff-b3e8-f4822c23c5c2': this.overdrafts2,
  };

  getOverdrafts(clientId: string): Observable<Overdraft[]> {
    return of(this.overdrafts[clientId]);
  }
}
