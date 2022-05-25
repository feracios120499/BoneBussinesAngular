import { Observable } from 'rxjs';

import { Overdraft } from '../../models/overdraft.model';

export abstract class BaseOverdraftsService {
  abstract getOverdrafts(clientId: string): Observable<Overdraft[]>;
}
