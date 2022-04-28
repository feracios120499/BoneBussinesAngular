import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CardReissueStatus } from '@b1-types/cards/card-reissue-status.type';
import { CardResponseResult } from '@models/cards/card-response-result.model';
import { ReissueApplicationDetails } from '@models/cards/reissue-application-details.model';
import { ReissueApplication } from '@models/cards/reissue-application.model';
import { ReissueApplicationsCount } from '@models/cards/reissue-applications-count.model';
import { ReissueCount } from '@models/cards/reissue-count.model';
import { ReissueHistory } from '@models/cards/reissue-history.model';
import { BaseService } from '@services/base.service';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ReissueApplicationService extends BaseService {
  /**
   *
   */
  constructor(private http: HttpClient) {
    super();
  }

  createApplication(application: ReissueApplication, clientId: string): Observable<ReissueApplicationDetails> {
    return this.http.post<CardResponseResult>(`api/v1/corpcards/reissue/${clientId}`, application).pipe(
      switchMap((result) => {
        if (result.isSuccess) {
          return this.getApplication(result.id, clientId);
        } else {
          throw new Error(result.message);
        }
      })
    );
  }

  getApplication(applicationId: number, clientId: string): Observable<ReissueApplicationDetails> {
    return this.http.get<ReissueApplicationDetails>(`api/v1/corpcards/reissue/${applicationId}/${clientId}`);
  }
  getLastApplication(cardId: string, clientId: string): Observable<ReissueApplicationDetails | undefined> {
    return this.http
      .get<ReissueApplicationDetails[]>(
        `api/v1/corpcards/reissue/${clientId}?$orderby=CreateDate desc&$filter=(StatusCode ne 'BANKERROR') and (CardId eq '${cardId}')&$top=1`
      )
      .pipe(map((applications) => (applications.length > 0 ? applications[0] : undefined)));
  }

  getCount(clientId: string): Observable<ReissueCount> {
    return this.http.get<ReissueApplicationsCount[]>(`api/v1/corpcards/reissue/count/${clientId}`).pipe(
      map((list) => {
        const count: ReissueCount = {};
        list.forEach((value) => (count[value.statusId] = value.statusCount));
        return count;
      })
    );
  }

  getHistory(applicationId: number, clientId: string): Observable<ReissueHistory[]> {
    return this.http.get<ReissueHistory[]>(`api/v1/corpcards/reissue/history/${applicationId}/${clientId}`);
  }

  getApplications(status: CardReissueStatus, clientId: string): Observable<ReissueApplicationDetails[]> {
    const filter =
      status == 'ONMYSIGN' ? `(StatusCode eq 'ONSIGN') and (IsNeedMySign eq true)` : `(StatusCode eq '${status}')`;
    return this.http.get<ReissueApplicationDetails[]>(
      `api/v1/corpcards/reissue/${clientId}?$filter=${filter}&$orderby=CreateDate desc`
    );
  }

  removeApplications(ids: number[], clientId: string): Observable<CardResponseResult[]> {
    return this.http.post<CardResponseResult[]>(`api/v1/corpcards/reissue/remove/${clientId}`, ids);
  }

  sendToBank(ids: number[], clientId: string): Observable<CardResponseResult[]> {
    return this.http.post<CardResponseResult[]>(`api/v1/corpcards/reissue/toBank/${clientId}`, ids);
  }
}
