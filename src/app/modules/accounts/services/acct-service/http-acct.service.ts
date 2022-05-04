import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccountTab } from '@modules/accounts/models/acct-tab.enum';
import { Dayjs } from 'dayjs';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AccountModel } from '@modules/accounts/models/account.model';

import { BaseService } from '../../../../@core/services/base.service';
import { AcctEdit } from '@modules/accounts/models/acct-edit.model';
import { Turnovers } from '@modules/accounts/models/turnovers.model';
import { TurnoverTransaction } from '@modules/accounts/models/turnover-transaction.model';
import { Transaction } from '@modules/accounts/models/transaction.model';
import { FileModel } from '@models/file.model';
import { BaseAcctService } from './base-acct.service';

@Injectable({
  providedIn: 'root',
})
export class HttpAcctService extends BaseService implements BaseAcctService {
  /**
   *
   */
  constructor(private http: HttpClient) {
    super();
  }

  getAccounts(clientId: string): Observable<AccountModel[]> {
    return this.http.get<AccountModel[]>(`api/v1/acct/accounts/${clientId}`).pipe(
      map((accounts) => {
        accounts.forEach((account) => this.mapAccount(account));
        return accounts;
      })
    );
  }

  getAccount(bankId: string, accountId: number, clientId: string): Observable<AccountModel> {
    return this.http
      .get<AccountModel>(`api/v1/acct/accounts/${bankId}/${accountId}/${clientId}`)
      .pipe(map((account) => this.mapAccount(account)));
  }

  updateAccount(bankId: string, accountId: number, clientId: string, updateAccount: AcctEdit): Observable<never> {
    return this.http.put<never>(`api/v1/acct/accounts/${bankId}/${accountId}/${clientId}`, {
      accName: updateAccount.name,
    });
  }

  getTurnovers(bankId: string, accountId: number, clientId: string, start: Dayjs, end: Dayjs): Observable<Turnovers[]> {
    const startFormated = start.format('YYYY-MM-DD');
    const endFormated = end.format('YYYY-MM-DD');
    const url = `api/v1/acct/dayturnovers/${bankId}/${accountId}/${clientId}?dateStart=${startFormated}&dateEnd=${endFormated}`;
    return this.http.get<Turnovers[]>(url).pipe(
      map((turnovers) =>
        turnovers.map((value) => ({
          ...value,
          id: `${value.turnoverDate.toISOString()}_${value.accId}_${value.bankId}`,
        }))
      )
    );
  }

  getIncomingTransactions(clientId: string, start: Dayjs, end: Dayjs): Observable<Transaction[]> {
    const startFormated = start.format('YYYY-MM-DD');
    const endFormated = end.format('YYYY-MM-DD');
    return this.http.get<Transaction[]>(
      `api/v1/acct/transactions/incoming/${clientId}?dateStart=${startFormated}&dateEnd=${endFormated}&$orderby=DocumentDate%20desc`
    );
  }

  getTransactions(
    bankId: string,
    accountId: number,
    clientId: string,
    start: Dayjs,
    end: Dayjs
  ): Observable<TurnoverTransaction[]> {
    const startFormated = start.format('YYYY-MM-DD');
    const endFormated = end.format('YYYY-MM-DD');
    const url = `api/v1/acct/turnovers/${bankId}/${accountId}/${clientId}?dateStart=${startFormated}&dateEnd=${endFormated}`;
    return this.http.get<TurnoverTransaction[]>(url);
  }

  getTransaction(bankId: string, transactionId: number, clientId: string): Observable<Transaction> {
    return this.http.get<Transaction>(`api/v1/acct/transactions/${bankId}/${transactionId}/${clientId}`);
  }

  getStatement(
    bankId: string,
    accountId: number,
    clientId: string,
    start: Dayjs,
    end: Dayjs,
    format: string = 'PDF',
    compressed?: boolean
  ): Observable<FileModel> {
    const startParam = `dateStart=${start.format('YYYY-MM-DD')}`;
    const endParam = `dateEnd=${end.format('YYYY-MM-DD')}`;
    const compressedParam = compressed !== undefined ? `&compressed=${compressed}` : '';

    return this.http
      .get<Blob>(
        `api/v1/acct/statements/getfile/${format}/${bankId}/${accountId}/${clientId}?${startParam}&${endParam}${compressedParam}`,
        { responseType: 'blob' as 'json', observe: 'response' }
      )
      .pipe(
        map((response) => this.mapFile(response)),
        map((result) => ({ ...result, name: result.name || `statement.${format.toLowerCase()}` }))
      );
  }

  sendStatement(
    bankId: string,
    accountId: number,
    clientId: string,
    start: Dayjs,
    end: Dayjs,
    format: string = 'PDF',
    email: string,
    compressed?: boolean
  ): Observable<never> {
    const startParam = `dateStart=${start.format('YYYY-MM-DD')}`;
    const endParam = `dateEnd=${end.format('YYYY-MM-DD')}`;
    const compressedParam = compressed !== undefined ? `&compressed=${compressed}` : '';
    const emailParam = `&email=${email}`;

    return this.http.get<never>(
      `api/v1/acct/statements/sendfile/${format}/${bankId}/${accountId}/${clientId}?${startParam}&${endParam}${emailParam}${compressedParam}`
    );
  }

  getRequisites(
    bankId: string,
    accountId: number,
    clientId: string,
    format: string = 'PDF',
    compressed?: boolean
  ): Observable<FileModel> {
    const compressedParam = compressed !== undefined ? `?compressed=${compressed}` : '';

    return this.http
      .get<Blob>(
        `api/v1/acct/accounts/file/getdetails/${format}/${bankId}/${accountId}/${clientId}${compressedParam}`,
        { responseType: 'blob' as 'json', observe: 'response' }
      )
      .pipe(
        map((response) => this.mapFile(response)),
        map((result) => ({ ...result, name: result.name || `requisites.${format.toLowerCase()}` }))
      );
  }

  sendRequisites(
    bankId: string,
    accountId: number,
    clientId: string,
    format: string = 'PDF',
    email: string,
    compressed?: boolean
  ): Observable<never> {
    const compressedParam = compressed !== undefined ? `&compressed=${compressed}` : '';
    const emailParam = `?email=${email}`;

    return this.http.get<never>(
      `api/v1/acct/accounts/file/senddetails/${format}/${bankId}/${accountId}/${clientId}${emailParam}${compressedParam}`
    );
  }

  getPrintTransaction(
    bankId: string,
    transactionId: string,
    clientId: string,
    format: string = 'HTML'
  ): Observable<string> {
    return this.http.get(`api/v1/acct/transactions/print/${format}/${transactionId}/${bankId}/${clientId}`, {
      responseType: 'text',
    });
  }

  getExportTurnovers(
    bankId: string,
    accountId: number,
    clientId: string,
    start: Dayjs,
    end: Dayjs,
    format: string = 'PDF',
    compressed?: boolean
  ): Observable<FileModel> {
    const startParam = `dateStart=${start.format('YYYY-MM-DD')}`;
    const endParam = `dateEnd=${end.format('YYYY-MM-DD')}`;
    const compressedParam = compressed !== undefined ? `&compressed=${compressed}` : '';

    return this.http
      .get<Blob>(
        `api/v1/acct/statements/getexport/${format}/${bankId}/${accountId}/${clientId}?${startParam}&${endParam}${compressedParam}`,
        { responseType: 'blob' as 'json', observe: 'response' }
      )
      .pipe(
        map((response) => this.mapFile(response)),
        map((result) => ({ ...result, name: result.name || `export.${format.toLowerCase()}` }))
      );
  }

  sendExportTurnovers(
    bankId: string,
    accountId: number,
    clientId: string,
    start: Dayjs,
    end: Dayjs,
    format: string = 'PDF',
    email: string,
    compressed?: boolean
  ): Observable<never> {
    const startParam = `dateStart=${start.format('YYYY-MM-DD')}`;
    const endParam = `dateEnd=${end.format('YYYY-MM-DD')}`;
    const compressedParam = compressed !== undefined ? `&compressed=${compressed}` : '';
    const emailParam = `&email=${email}`;

    return this.http.get<never>(
      `api/v1/acct/statements/sendexport/${format}/${bankId}/${accountId}/${clientId}?${startParam}&${endParam}${emailParam}${compressedParam}`
    );
  }

  private mapFile(res: HttpResponse<Blob>): FileModel {
    const file: FileModel = {
      blob: res.body ? res.body : undefined,
    };

    const disposition = res.headers.get('Content-Disposition');
    if (!disposition) {
      // either the disposition was not sent, or is not accessible
      //  (see CORS Access-Control-Expose-Headers)
      return file;
    }
    const utf8FilenameRegex = /filename\*=UTF-8''([\w%\-\.]+)(?:; |$)/;
    const asciiFilenameRegex = /filename=(["'])(.*?[^\\])\1(?:; |$)/;

    let fileName = '';
    if (utf8FilenameRegex.test(disposition)) {
      const exec = utf8FilenameRegex.exec(disposition);
      if (exec) {
        fileName = decodeURIComponent(exec[1]);
      } else {
        return file;
      }
    } else {
      const matches = asciiFilenameRegex.exec(disposition);
      if (matches != null && matches[2]) {
        fileName = matches[2];
      }
    }
    file.name = fileName;
    return file;
  }

  private mapAccount(account: AccountModel): AccountModel {
    account.status = !account.closingDate ? AccountTab.Active : AccountTab.Closed;
    return account;
  }
}
