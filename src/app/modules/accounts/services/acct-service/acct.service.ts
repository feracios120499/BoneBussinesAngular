import { Injectable } from '@angular/core';
import { FileModel } from '@models/file.model';
import { AccountModel } from '@modules/accounts/models/account.model';
import { AcctEdit } from '@modules/accounts/models/acct-edit.model';
import { Transaction } from '@modules/accounts/models/transaction.model';
import { TurnoverTransaction } from '@modules/accounts/models/turnover-transaction.model';
import { Turnovers } from '@modules/accounts/models/turnovers.model';
import { Store } from '@ngrx/store';
import { AppSelectors } from '@store/app/selectors';
import { Dayjs } from 'dayjs';
import { Observable } from 'rxjs';
import { BaseAcctService } from './base-acct.service';
import { DemoAcctService } from './demo-acct.service';
import { HttpAcctService } from './http-acct.service';

@Injectable({
  providedIn: 'root',
})
export class AcctService implements BaseAcctService {
  private acctService: BaseAcctService;
  constructor(demoAcctService: DemoAcctService, httpAcctService: HttpAcctService, private store: Store) {
    this.acctService = httpAcctService;
    this.store.select(AppSelectors.isDemo).subscribe((isDemo) => {
      if (isDemo) {
        this.acctService = demoAcctService;
      } else {
        this.acctService = httpAcctService;
      }
    });
  }
  getAccounts(clientId: string): Observable<AccountModel[]> {
    return this.acctService.getAccounts(clientId);
  }
  getAccount(bankId: string, accountId: number, clientId: string): Observable<AccountModel> {
    return this.acctService.getAccount(bankId, accountId, clientId);
  }
  updateAccount(bankId: string, accountId: number, clientId: string, updateAccount: AcctEdit): Observable<never> {
    throw new Error('Method not implemented.');
  }
  getTurnovers(bankId: string, accountId: number, clientId: string, start: Dayjs, end: Dayjs): Observable<Turnovers[]> {
    throw new Error('Method not implemented.');
  }
  getTransactions(
    bankId: string,
    accountId: number,
    clientId: string,
    start: Dayjs,
    end: Dayjs
  ): Observable<TurnoverTransaction[]> {
    throw new Error('Method not implemented.');
  }
  getTransaction(bankId: string, transactionId: number, clientId: string): Observable<Transaction> {
    throw new Error('Method not implemented.');
  }
  getStatement(
    bankId: string,
    accountId: number,
    clientId: string,
    start: Dayjs,
    end: Dayjs,
    format: string,
    compressed?: boolean
  ): Observable<FileModel> {
    throw new Error('Method not implemented.');
  }
  sendStatement(
    bankId: string,
    accountId: number,
    clientId: string,
    start: Dayjs,
    end: Dayjs,
    format: string,
    email: string,
    compressed?: boolean
  ): Observable<never> {
    throw new Error('Method not implemented.');
  }
  getRequisites(
    bankId: string,
    accountId: number,
    clientId: string,
    format: string,
    compressed?: boolean
  ): Observable<FileModel> {
    throw new Error('Method not implemented.');
  }
  sendRequisites(
    bankId: string,
    accountId: number,
    clientId: string,
    format: string,
    email: string,
    compressed?: boolean
  ): Observable<never> {
    throw new Error('Method not implemented.');
  }
  getPrintTransaction(
    bankId: string,
    transactionId: string,
    clientId: string,
    format: string = 'HTML'
  ): Observable<string> {
    throw new Error('Method not implemented.');
  }
  getExportTurnovers(
    bankId: string,
    accountId: number,
    clientId: string,
    start: Dayjs,
    end: Dayjs,
    format: string,
    compressed?: boolean
  ): Observable<FileModel> {
    throw new Error('Method not implemented.');
  }
  sendExportTurnovers(
    bankId: string,
    accountId: number,
    clientId: string,
    start: Dayjs,
    end: Dayjs,
    format: string,
    email: string,
    compressed?: boolean
  ): Observable<never> {
    throw new Error('Method not implemented.');
  }
}
