import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CardResponseResult } from '@models/cards/card-response-result.model';
import { ReissueApplicationDetails } from '@models/cards/reissue-application-details.model';
import { ReissueApplication } from '@models/cards/reissue-application.model';
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

  createApplication(
    application: ReissueApplication,
    clientId: string
  ): Observable<ReissueApplicationDetails> {
    return this.http
      .post<CardResponseResult>(
        `api/v1/corpcards/reissue/${clientId}`,
        application
      )
      .pipe(
        switchMap((result) => {
          if (result.isSuccess) {
            return this.getApplication(result.id, clientId);
          } else {
            throw new Error(result.message);
          }
        })
      );
  }

  getApplication(
    applicationId: number,
    clientId: string
  ): Observable<ReissueApplicationDetails> {
    return this.http.get<ReissueApplicationDetails>(
      `api/v1/corpcards/reissue/${applicationId}/${clientId}`
    );
  }
  getLastApplication(
    cardId: string,
    clientId: string
  ): Observable<ReissueApplicationDetails | undefined> {
    return this.http
      .get<ReissueApplicationDetails[]>(
        `api/v1/corpcards/reissue/${clientId}?$orderby=CreateDate desc&$filter=(StatusCode ne 'BANKERROR') and (CardId eq '${cardId}')&$top=1`
      )
      .pipe(
        map((applications) =>
          applications.length > 0 ? applications[0] : undefined
        )
      );
  }
}
