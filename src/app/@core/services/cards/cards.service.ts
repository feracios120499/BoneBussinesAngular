import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CardAccount } from "@models/cards/card-account.model";
import { BaseService } from "@services/base.service";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class CardsService extends BaseService {
    /**
     *
     */
    constructor(private http: HttpClient) {
        super();
    }

    getCardAccounts(clientId: string): Observable<CardAccount[]> {
        return this.http.get<CardAccount[]>(`api/v1/acct/corpcards/${clientId}`);
    }
}