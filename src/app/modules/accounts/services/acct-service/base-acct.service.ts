import { FileModel } from '@models/file.model';
import { AccountModel } from '@modules/accounts/models/account.model';
import { AcctEdit } from '@modules/accounts/models/acct-edit.model';
import { Transaction } from '@modules/accounts/models/transaction.model';
import { TurnoverTransaction } from '@modules/accounts/models/turnover-transaction.model';
import { Turnovers } from '@modules/accounts/models/turnovers.model';
import { Dayjs } from 'dayjs';
import { Observable } from 'rxjs';

export abstract class BaseAcctService {
  abstract getAccounts(clientId: string): Observable<AccountModel[]>;

  abstract getAccount(bankId: string, accountId: number, clientId: string): Observable<AccountModel>;

  abstract updateAccount(
    bankId: string,
    accountId: number,
    clientId: string,
    updateAccount: AcctEdit
  ): Observable<never>;

  abstract getTurnovers(
    bankId: string,
    accountId: number,
    clientId: string,
    start: Dayjs,
    end: Dayjs
  ): Observable<Turnovers[]>;

  abstract getIncomingTransactions(clientId: string, start: Dayjs, end: Dayjs): Observable<Transaction[]>;

  abstract getTransactions(
    bankId: string,
    accountId: number,
    clientId: string,
    start: Dayjs,
    end: Dayjs
  ): Observable<TurnoverTransaction[]>;

  abstract getTransaction(bankId: string, transactionId: number, clientId: string): Observable<Transaction>;

  abstract getStatement(
    bankId: string,
    accountId: number,
    clientId: string,
    start: Dayjs,
    end: Dayjs,
    format: string,
    compressed?: boolean
  ): Observable<FileModel>;

  abstract sendStatement(
    bankId: string,
    accountId: number,
    clientId: string,
    start: Dayjs,
    end: Dayjs,
    format: string,
    email: string,
    compressed?: boolean
  ): Observable<never>;

  abstract getRequisites(
    bankId: string,
    accountId: number,
    clientId: string,
    format: string,
    compressed?: boolean
  ): Observable<FileModel>;

  abstract sendRequisites(
    bankId: string,
    accountId: number,
    clientId: string,
    format: string,
    email: string,
    compressed?: boolean
  ): Observable<never>;

  abstract getPrintTransaction(
    bankId: string,
    transactionId: string,
    clientId: string,
    format: string
  ): Observable<string>;

  abstract getExportTurnovers(
    bankId: string,
    accountId: number,
    clientId: string,
    start: Dayjs,
    end: Dayjs,
    format: string,
    compressed?: boolean
  ): Observable<FileModel>;

  abstract sendExportTurnovers(
    bankId: string,
    accountId: number,
    clientId: string,
    start: Dayjs,
    end: Dayjs,
    format: string,
    email: string,
    compressed?: boolean
  ): Observable<never>;
}
