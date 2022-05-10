import { Injectable } from '@angular/core';
import { ReissueSign } from '@models/cards/reissue-sign.model';
import { DemoError } from '@models/errors/demo-error.model';
import { SignBuffer } from '@models/sign-buffer.model';
import { SignRequest } from '@models/sign-request.model';
import { SignSaveResponse } from '@models/sign-response.model';
import { Observable, of, throwError } from 'rxjs';
import { BaseReissueApplicationSignService } from './base-reissue-application-sign.service';

@Injectable({
  providedIn: 'root',
})
export class DemoReissueApplicationSignService extends BaseReissueApplicationSignService {
  private reissueSigns: (ReissueSign & { applicationId: number })[] = [
    {
      visaId: 1,
      date: new Date('2022-04-27T23:17:32'),
      user: {
        displayName: 'Дарт Вейдер',
      },
      applicationId: 185,
    },
    {
      visaId: 1,
      date: new Date('2022-04-27T23:21:00'),
      user: {
        displayName: 'Дарт Вейдер',
      },
      applicationId: 186,
    },
    {
      visaId: 1,
      date: new Date('2022-04-28T23:55:00'),
      user: {
        displayName: 'Дарт Вейдер',
      },
      applicationId: 187,
    },
  ];

  getSignes(applicationId: number, clientId: string): Observable<ReissueSign[]> {
    return of(this.reissueSigns.filter((item) => item.applicationId === applicationId));
  }

  getBuffer(applicationsId: number, clientId: string): Observable<SignBuffer> {
    return throwError(new DemoError());
  }

  getBuffers(applicationIds: number[], clientId: string): Observable<SignBuffer[]> {
    return throwError(new DemoError());
  }

  addSignature(sign: SignRequest, clientId: string): Observable<SignSaveResponse> {
    return throwError(new DemoError());
  }

  addSignatures(signatures: SignRequest[], clientId: string): Observable<SignSaveResponse[]> {
    return throwError(new DemoError());
  }
}
