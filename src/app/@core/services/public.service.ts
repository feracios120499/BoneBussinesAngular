import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BankModel } from 'src/app/@shared/models/bank.model';
import { BaseService } from './base.service';

@Injectable({
    providedIn: 'root'
})
export class PublicService extends BaseService {

    /**
     *
     */
    constructor(private http: HttpClient) {
        super();
    }

    getBanks(): Observable<BankModel[]> {
        return this.http.get<BankModel[]>(`api/v1/public/banks/`);
    }
}
