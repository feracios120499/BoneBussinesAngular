import { Observable } from 'rxjs';

import { Deposit } from '../../models/deposit.model';

export abstract class BaseDepositsService {
  abstract getDeposits(clientId: string): Observable<Deposit[]>;
}
