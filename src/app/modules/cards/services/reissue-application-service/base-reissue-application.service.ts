import { Observable } from 'rxjs';

import { ReissueApplicationDetails } from '@models/cards/reissue-application-details.model';
import { ReissueApplication } from '@models/cards/reissue-application.model';
import { ReissueHistory } from '@models/cards/reissue-history.model';
import { StatusCount } from '@models/status-count.model';
import { CardReissueStatus } from '@b1-types/cards/card-reissue-status.type';
import { CardResponseResult } from '@models/cards/card-response-result.model';

export abstract class BaseReissueApplicationService {
  abstract createApplication(application: ReissueApplication, clientId: string): Observable<ReissueApplicationDetails>;

  abstract getApplication(applicationId: number, clientId: string): Observable<ReissueApplicationDetails>;

  abstract getLastApplication(cardId: string, clientId: string): Observable<ReissueApplicationDetails | undefined>;

  abstract getCount(clientId: string): Observable<StatusCount>;

  abstract getHistory(applicationId: number, clientId: string): Observable<ReissueHistory[]>;

  abstract getApplications(status: CardReissueStatus, clientId: string): Observable<ReissueApplicationDetails[]>;

  abstract removeApplications(ids: number[], clientId: string): Observable<CardResponseResult[]>;

  abstract sendToBank(ids: number[], clientId: string): Observable<CardResponseResult[]>;
}
