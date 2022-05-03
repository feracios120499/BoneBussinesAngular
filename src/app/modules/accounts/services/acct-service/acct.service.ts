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
    // throw new Error('Method not implemented.');
    return this.acctService.getTurnovers(bankId, accountId, clientId, start, end);
  }
  getTransactions(
    bankId: string,
    accountId: number,
    clientId: string,
    start: Dayjs,
    end: Dayjs
  ): Observable<TurnoverTransaction[]> {
    // throw new Error('Method not implemented.');
    return this.acctService.getTransactions(bankId, accountId, clientId, start, end);
  }
  getTransaction(bankId: string, transactionId: number, clientId: string): Observable<Transaction> {
    // throw new Error('Method not implemented.');
    return this.acctService.getTransaction(bankId, transactionId, clientId);
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
    // throw new Error('Method not implemented.');
    return this.acctService.getStatement(bankId, accountId, clientId, start, end, format, compressed);
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
    // throw new Error('Method not implemented.');
    return this.acctService.sendStatement(bankId, accountId, clientId, start, end, format, email, compressed);
  }
  getRequisites(
    bankId: string,
    accountId: number,
    clientId: string,
    format: string,
    compressed?: boolean
  ): Observable<FileModel> {
    // throw new Error('Method not implemented.');
    return this.acctService.getRequisites(bankId, accountId, clientId, format, compressed);
  }
  sendRequisites(
    bankId: string,
    accountId: number,
    clientId: string,
    format: string,
    email: string,
    compressed?: boolean
  ): Observable<never> {
    // throw new Error('Method not implemented.');
    return this.acctService.sendRequisites(bankId, accountId, clientId, format, email, compressed);
  }
  getPrintTransaction(
    bankId: string,
    transactionId: string,
    clientId: string,
    format: string = 'HTML'
  ): Observable<string> {
    // throw new Error('Method not implemented.');
    return this.acctService.getPrintTransaction(bankId, transactionId, clientId, format);
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
    // throw new Error('Method not implemented.');
    return this.acctService.getExportTurnovers(bankId, accountId, clientId, start, end, format, compressed);
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
    return this.acctService.sendExportTurnovers(bankId, accountId, clientId, start, end, format, email, compressed);
  }
}
