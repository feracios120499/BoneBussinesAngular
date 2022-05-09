import { Injectable } from '@angular/core';
import { CardReissueStatus } from '@b1-types/cards/card-reissue-status.type';
import { CardResponseResult } from '@models/cards/card-response-result.model';
import { ReissueApplicationDetails } from '@models/cards/reissue-application-details.model';
import { ReissueApplication } from '@models/cards/reissue-application.model';
import { ReissueCount } from '@models/cards/reissue-count.model';
import { ReissueHistory } from '@models/cards/reissue-history.model';
import { Store } from '@ngrx/store';
import { AppSelectors } from '@store/app/selectors';
import { Observable } from 'rxjs';
import { BaseReissueApplicationService } from './base-reissue-application.service';
import { DemoReissueApplicationService } from './demo-reissue-application.service';
import { HttpReissueApplicationService } from './http-reissue-application.service';

@Injectable({
  providedIn: 'root',
})
export class ReissueApplicationService implements BaseReissueApplicationService {
  private reissueApplicationService: BaseReissueApplicationService;

  constructor(
    demoReissueApplicationService: DemoReissueApplicationService,
    httpReissueApplicationService: HttpReissueApplicationService,
    private store: Store
  ) {
    this.reissueApplicationService = httpReissueApplicationService;
    this.store.select(AppSelectors.isDemo).subscribe((isDemo) => {
      if (isDemo) {
        this.reissueApplicationService = demoReissueApplicationService;
      } else {
        this.reissueApplicationService = httpReissueApplicationService;
      }
    });
  }

  createApplication(application: ReissueApplication, clientId: string): Observable<ReissueApplicationDetails> {
    return this.reissueApplicationService.createApplication(application, clientId);
  }

  getApplication(applicationId: number, clientId: string): Observable<ReissueApplicationDetails> {
    return this.reissueApplicationService.getApplication(applicationId, clientId);
  }
  getLastApplication(cardId: string, clientId: string): Observable<ReissueApplicationDetails | undefined> {
    return this.reissueApplicationService.getLastApplication(cardId, clientId);
  }

  getCount(clientId: string): Observable<ReissueCount> {
    return this.reissueApplicationService.getCount(clientId);
  }

  getHistory(applicationId: number, clientId: string): Observable<ReissueHistory[]> {
    return this.reissueApplicationService.getHistory(applicationId, clientId);
  }

  getApplications(status: CardReissueStatus, clientId: string): Observable<ReissueApplicationDetails[]> {
    return this.reissueApplicationService.getApplications(status, clientId);
  }

  removeApplications(ids: number[], clientId: string): Observable<CardResponseResult[]> {
    return this.reissueApplicationService.removeApplications(ids, clientId);
  }

  sendToBank(ids: number[], clientId: string): Observable<CardResponseResult[]> {
    return this.reissueApplicationService.removeApplications(ids, clientId);
  }
}
