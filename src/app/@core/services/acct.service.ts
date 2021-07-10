import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
        return this.http.get<AccountModel[]>(`api/v1/acct/accounts/${clientId}`);
    }
}
