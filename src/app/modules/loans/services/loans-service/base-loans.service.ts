import { Observable } from 'rxjs';

import { Loan } from '../../models/loan.model';
import { LoanSchedule } from '../../models/loan-schedule.model';

export abstract class BaseLoansService {
  abstract getLoans(clientId: string): Observable<Loan[]>;

  abstract getLoanSchedules(clientId: string, bankId: string, loanId: number): Observable<LoanSchedule[]>;
}
