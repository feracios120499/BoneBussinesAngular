import { Injectable } from '@angular/core';
import { Profile } from '@models/profile.model';
import { Observable, of } from 'rxjs';
import { BaseUserService } from './base-user.service';

@Injectable({
  providedIn: 'root',
})
export class DemoUserService implements BaseUserService {
  getProfile(): Observable<Profile> {
    const profile: Profile = {
      creatingDate: new Date('1899-12-30T00:00:00'),
      customers: [
        {
          id: 100100,
          clientId: '565bbaee-37a6-48ff-b3e8-f4822c23c5c2',
          taxCode: '3456789012',
          name: 'ФОП Дарт Вейдер',
          nameShort: 'Дарт Вейдер',
          nameInternational: 'Darth Veider',
          contractNumber: 'IRN-100100',
          custType: 3.0,
          dateOpen: new Date('2009-03-10T00:00:00'),
          dateClosed: null,
          signNumber: 1.0,
          phone: null,
          roles: ['Director'],
          bankDate: new Date(),
          address: '666666, Галактика, Зірка смерті',
          bankAddress: '666666, Галактика, Зірка смерті',
          bankName: "АТ 'ШТУРМОВИК'",
          buyingCommission: 0.1,
          conversionCommission: 0.3,
          sellingCommission: 0.2,
          edrpo: 'L666666666',
          torgAccount: '29008302802',
          menuSettings: [
            {
              name: 'accounts',
              isDisplay: true,
              number: 1,
            },
            {
              name: 'corpcards',
              isDisplay: true,
              number: 2,
            },
            {
              name: 'payments',
              isDisplay: true,
              number: 3,
            },
            {
              name: 'applications',
              isDisplay: true,
              number: 4,
            },
            {
              name: 'salary',
              isDisplay: true,
              number: 5,
            },
            {
              name: 'deposits',
              isDisplay: true,
              number: 6,
            },
            {
              name: 'loans',
              isDisplay: true,
              number: 7,
            },
            {
              name: 'supdocuments',
              isDisplay: true,
              number: 8,
            },
          ],
          signCount: 2,
          syncDate: new Date(),
        },
        {
          id: 100200,
          clientId: '565bbaee-37a6-48ff-b3e8-f4822c23c5c1',
          taxCode: '4567890123',
          name: 'Міністерство фінансів Галактичної Імперії',
          nameShort: 'Міністерство фінансів Галактичної Імперії',
          nameInternational: 'Imperial Finance Ministry',
          contractNumber: '',
          custType: 2.0,
          dateOpen: new Date('2012-07-23T00:00:00'),
          dateClosed: null,
          signNumber: 1,
          roles: ['AccountsViewer', 'LoansViewer'],
          bankDate: new Date(),
          address: '666666, Галактика, Зірка смерті',
          bankAddress: '666666, Галактика, Зірка смерті',
          bankName: "АТ 'ШТУРМОВИК'",
          buyingCommission: 0.1,
          conversionCommission: 0.3,
          sellingCommission: 0.2,
          edrpo: 'L606666666',
          torgAccount: '29008302802',
          menuSettings: [
            {
              name: 'accounts',
              isDisplay: true,
              number: 1,
            },
            {
              name: 'loans',
              isDisplay: true,
              number: 6,
            },
          ],
          signCount: 2,
          syncDate: new Date(),
        },
      ],
      modules: [],
      userId: 'f0ebe5a8-9843-4190-8ddf-97b46b2134c2',
      userName: 'darthveider@ub.com',
      userDisplayName: 'Дарт Вейдер',
      firstName: 'Дарт',
      lastName: 'Вейдер',
      patronymic: 'Вейдерович',
      userInternationalName: null,
      email: 'darthveider@ub.com',
      phoneNumber: '+1450767877',
      userPictureUrl: null,
      mobileIdIsActive: false,
    };

    return of(profile);
  }
}
