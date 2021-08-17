import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccountTab } from '@modules/accounts/models/acct-tab.enum';
import { AcctEdit } from '@stores/acct.store';
import { Dayjs } from 'dayjs';
import { Observable } from 'rxjs';
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

    getTurnovers(bankId: string, accountId: number, clientId: string, start: Dayjs, end: Dayjs): Observable<any> {
        return this.http.get<any>(`api/v1/acct/dayturnovers/${bankId}/${accountId}/${clientId}?dateStart=${start.format('YYYY-MM-DD')}&dateEnd=${end.format('YYYY-MM-DD')}`);
    }

    private mapAccount(account: AccountModel): AccountModel {
        account.Status = !account.ClosingDate ? AccountTab.Active : AccountTab.Closed;
        return account;
    }
}
