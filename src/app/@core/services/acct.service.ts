import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AcctEdit } from '@models/acct-edit.model';
import { FileModel } from '@models/file.model';
import { Transaction } from '@models/transaction.model';
import { TurnoverTransaction } from '@models/turnover-transaction.model';
import { Turnovers } from '@models/turnovers.model';
import { AccountTab } from '@modules/accounts/models/acct-tab.enum';
import { Dayjs } from 'dayjs';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { AccountModel } from 'src/app/@shared/models/account.model';

import { BaseService } from './base.service';

@Injectable({
    providedIn: 'root'
})
export class AcctService extends BaseService {

    /**
     *
     */
    constructor(private http: HttpClient) {
        super();
    }

    getAccounts(clientId: string): Observable<AccountModel[]> {
        return this.http.get<AccountModel[]>(`api/v1/acct/accounts/${clientId}`).pipe(map(accounts => {
            accounts.forEach(account => this.mapAccount(account));
            return accounts;
        }));
    }

    getAccount(bankId: string, accountId: number, clientId: string): Observable<AccountModel> {
        return this.http.get<AccountModel>(`api/v1/acct/accounts/${bankId}/${accountId}/${clientId}`).pipe(
            map(account => this.mapAccount(account))
        );
    }

    updateAccount(bankId: string, accountId: number, clientId: string, updateAccount: AcctEdit): Observable<never> {
        return this.http.put<never>(`api/v1/acct/accounts/${bankId}/${accountId}/${clientId}`, { AccName: updateAccount.name });
    }

    getTurnovers(bankId: string, accountId: number, clientId: string, start: Dayjs, end: Dayjs): Observable<Turnovers[]> {
        return this.http.get<Turnovers[]>(`api/v1/acct/dayturnovers/${bankId}/${accountId}/${clientId}?dateStart=${start.format('YYYY-MM-DD')}&dateEnd=${end.format('YYYY-MM-DD')}`)
            .pipe(map(turnovers => turnovers.map(value => ({ ...value, Id: `${value.TurnoverDate.toISOString()}_${value.AccId}_${value.BankId}` }))));
    }

    getTransactions(bankId: string, accountId: number, clientId: string, start: Dayjs, end: Dayjs): Observable<TurnoverTransaction[]> {
        // const error = new HttpErrorResponse({ status: 422, error: { Message: 'test' } });
        // return throwError(error) as any;
        return this.http.get<TurnoverTransaction[]>(`api/v1/acct/turnovers/${bankId}/${accountId}/${clientId}?dateStart=${start.format('YYYY-MM-DD')}&dateEnd=${end.format('YYYY-MM-DD')}`);

    }

    getTransaction(bankId: string, transactionId: number, clientId: string): Observable<Transaction> {
        return this.http.get<Transaction>(`api/v1/acct/transactions/${bankId}/${transactionId}/${clientId}`);
    }

    getStatements(
        bankId: string,
        accountId: number,
        clientId: string,
        start: Dayjs,
        end: Dayjs,
        format: string = 'PDF',
        email?: string,
        compressed?: boolean): Observable<FileModel> {

        const startParam = `dateStart=${start.format('YYYY-MM-DD')}`;
        const endParam = `dateEnd=${end.format('YYYY-MM-DD')}`;
        const emailParam = email ? `&email=${email}` : '';
        const compressedParam = compressed !== undefined ? `&compressed=${compressed}` : '';

        return this.http.get<Blob>(`api/v1/acct/statements/getfile/${format}/${bankId}/${accountId}/${clientId}?${startParam}&${endParam}${emailParam}${compressedParam}`,
            { responseType: 'blob' as 'json', observe: 'response' }).pipe(
                map((response) => this.mapFile(response))
            );
    }

    private mapFile(res: HttpResponse<Blob>): FileModel {
        const file: FileModel = {
            blob: res.body ? res.body : undefined
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
            }
            else {
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
        account.Status = !account.ClosingDate ? AccountTab.Active : AccountTab.Closed;
        return account;
    }
}
