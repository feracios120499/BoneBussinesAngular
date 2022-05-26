import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { AppSelectors } from '@store/app/selectors';
import { LoanSchedule } from '../../models/loan-schedule.model';
import { Loan } from '../../models/loan.model';
import { BaseLoansService } from './base-loans.service';
import { DemoLoansService } from './demo-loans.service';
import { HttpLoansService } from './http-loans.service';

@Injectable({
  providedIn: 'root',
})
export class LoansService implements BaseLoansService {
  private loansService: BaseLoansService;

  constructor(demoLoansService: DemoLoansService, httpLoansService: HttpLoansService, private store: Store) {
    this.loansService = httpLoansService;
    this.store.select(AppSelectors.isDemo).subscribe((isDemo) => {
      if (isDemo) {
        this.loansService = demoLoansService;
      } else {
        this.loansService = httpLoansService;
      }
    });
  }

  getLoans(clientId: string): Observable<Loan[]> {
    return this.loansService.getLoans(clientId);
  }

  getLoanSchedules(clientId: string, bankId: string, loanId: number): Observable<LoanSchedule[]> {
    return this.loansService.getLoanSchedules(clientId, bankId, loanId);
  }
}
