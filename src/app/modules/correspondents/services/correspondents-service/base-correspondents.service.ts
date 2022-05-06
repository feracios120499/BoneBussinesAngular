import { Observable } from 'rxjs';

import { CorrespondentForm } from '@modules/correspondents/models/correspondent-form.model';
import { Correspondent } from '@modules/correspondents/models/correspondent.model';
import { CorrespondentUpdateModel } from '@modules/correspondents/models/correspondent-update.model';

export abstract class BaseCorrespondentsService {
  abstract getCorrespondents(clientId: string): Observable<Correspondent[]>;

  abstract createCorrespondent(clientId: string, correspondentData: CorrespondentForm): Observable<Correspondent>;

  abstract updateCorrespondent(
    clientId: string,
    correspondentData: CorrespondentUpdateModel
  ): Observable<Correspondent>;

  abstract deleteCorrespondent(clientId: string, correspondentId: string): Observable<void>;
}
