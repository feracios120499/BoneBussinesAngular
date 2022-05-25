import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { BaseService } from '@services/base.service';
import { BaseLoansService } from './base-loans.service';
import { Loan } from '../../models/loan.model';
import { LoanSchedule } from '../../models/loan-schedule.model';

@Injectable({
  providedIn: 'root',
})
export class HttpLoansService extends BaseService implements BaseLoansService {
  constructor(private http: HttpClient) {
    super();
  }

  getLoans(clientId: string): Observable<Loan[]> {
    return this.http.get<Loan[]>(`api/v1/loan/loans/${clientId}`);
  }

  getLoanSchedules(clientId: string, bankId: string, loanId: number): Observable<LoanSchedule[]> {
    return this.http.get<LoanSchedule[]>(`api/v1/loan/schedules/combine/${bankId}/${loanId}/${clientId}`);
  }
}
