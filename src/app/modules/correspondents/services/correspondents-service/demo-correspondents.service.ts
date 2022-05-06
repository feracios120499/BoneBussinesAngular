import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

import { CorrespondentForm } from '@modules/correspondents/models/correspondent-form.model';
import { Correspondent } from '@modules/correspondents/models/correspondent.model';
import { CorrespondentUpdateModel } from '@modules/correspondents/models/correspondent-update.model';
import { BaseCorrespondentsService } from './base-correspondents.service';
import { DemoError } from '@models/errors/demo-error.model';

@Injectable({
  providedIn: 'root',
})
export class DemoCorrespondentsService extends BaseCorrespondentsService {
  private correspondents: Correspondent[] = [
    {
      bank: {
        bankCode: '322669',
        name: 'ГалактБанк',
        shortName: 'ГалактБанк',
        countryCode: 'UA',
        isBlocked: false,
      },
      id: '18cc5759-beba-46c4-8582-7e3a7aa04e17',
      lastUseDate: new Date('2016-10-21T14:34:11'),
      creatingDate: new Date('2016-10-13T14:15:29'),
      userId: 'f0ebe5a8-9843-4190-8ddf-97b46b2134c3',
      bankName: 'ГалактБанк',
      bankCode: '322669',
      taxCode: '05691238',
      name: 'Рахунок Гранд-Адмірала Трауна',
      accNumber: 'UA083226690000026259501470659',
      accCurrencyCode: 'UAH',
      accCurrencyId: null,
    },
    {
      bank: {
        bankCode: '322669',
        name: 'ГалактБанк',
        shortName: 'ГалактБанк',
        countryCode: 'UA',
        isBlocked: false,
      },
      id: '18cc5759-beba-46c4-8582-7e3a7aa04e17',
      lastUseDate: new Date('2016-10-21T14:34:11'),
      creatingDate: new Date('2016-10-13T14:15:29'),
      userId: 'f0ebe5a8-9843-4190-8ddf-97b46b2134c3',
      bankName: 'ГалактБанк',
      bankCode: '322669',
      taxCode: '05691238',
      name: 'Рахунок Гранд-Моффа Таркіна',
      accNumber: 'UA083226690000026259501470659',
      accCurrencyCode: 'UAH',
      accCurrencyId: null,
    },
    {
      bank: {
        bankCode: '322669',
        name: 'ГалактБанк',
        shortName: 'ГалактБанк',
        countryCode: 'UA',
        isBlocked: false,
      },
      id: '18cc5759-beba-46c4-8582-7e3a7aa04e17',
      lastUseDate: new Date('2016-10-21T14:34:11'),
      creatingDate: new Date('2016-10-13T14:15:29'),
      userId: 'f0ebe5a8-9843-4190-8ddf-97b46b2134c3',
      bankName: 'ГалактБанк',
      bankCode: '322669',
      taxCode: '05691238',
      name: 'Рахунок Дарта Вейдера',
      accNumber: 'UA083226690000026259501470659',
      accCurrencyCode: 'UAH',
      accCurrencyId: null,
    },
    {
      bank: {
        bankCode: '322669',
        name: 'ГалактБанк',
        shortName: 'ГалактБанк',
        countryCode: 'UA',
        isBlocked: false,
      },
      id: '18cc5759-beba-46c4-8582-7e3a7aa04e17',
      lastUseDate: new Date('2016-10-21T14:34:11'),
      creatingDate: new Date('2016-10-13T14:15:29'),
      userId: 'f0ebe5a8-9843-4190-8ddf-97b46b2134c3',
      bankName: 'ГалактБанк',
      bankCode: '322669',
      taxCode: '05691238',
      name: 'Рахунок армії штурмовиків',
      accNumber: 'UA083226690000026259501470659',
      accCurrencyCode: 'UAH',
      accCurrencyId: null,
    },
    {
      bank: {
        bankCode: '322669',
        name: 'ГалактБанк',
        shortName: 'ГалактБанк',
        countryCode: 'UA',
        isBlocked: false,
      },
      id: '18cc5759-beba-46c4-8582-7e3a7aa04e17',
      lastUseDate: new Date('2016-10-21T14:34:11'),
      creatingDate: new Date('2016-10-13T14:15:29'),
      userId: 'f0ebe5a8-9843-4190-8ddf-97b46b2134c3',
      bankName: 'ГалактБанк',
      bankCode: '322669',
      taxCode: '05691238',
      name: 'Пенсійний рахунок імператора Палпатіна',
      accNumber: 'UA083226690000026259501470659',
      accCurrencyCode: 'UAH',
      accCurrencyId: null,
    },
  ];

  getCorrespondents(clientId: string): Observable<Correspondent[]> {
    return of(this.correspondents);
  }

  createCorrespondent(clientId: string, correspondentData: CorrespondentForm): Observable<Correspondent> {
    return throwError(new DemoError());
  }

  updateCorrespondent(clientId: string, correspondentData: CorrespondentUpdateModel): Observable<Correspondent> {
    return throwError(new DemoError());
  }

  deleteCorrespondent(clientId: string, correspondentId: string): Observable<void> {
    return throwError(new DemoError());
  }
}
