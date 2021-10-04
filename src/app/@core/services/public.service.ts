import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PaymentType } from '@models/payment-type.model';
import { Resources } from '@models/resources.model';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { BankModel } from 'src/app/@shared/models/bank.model';
import { BaseService } from './base.service';
import { PublicService } from './abstract/public.service';

@Injectable({
    providedIn: 'root'
})
export class HttpPublicService extends BaseService implements PublicService {

    /**
     *
     */
    constructor(private http: HttpClient) {
        super();
    }

    getBank(bankCode: string): Observable<BankModel> {
        return this.http.get<any>(`api/v1/public/banks/${bankCode}`).pipe(map((response) => response.Result ? response.Result : response));
    }

    getBanks(): Observable<BankModel[]> {
        return this.http.get<any>(`api/v1/public/banks/`).pipe(map((response) => response.Result ? response.Result : response));
    }

    getResources(): Observable<Resources> {
        return this.http.get<any>('api/v1/public/resources').pipe(map((response) => response.Result ? response.Result : response));
    }

    getPayTypes(): Observable<PaymentType[]> {
        return this.http.get<any>(`api/v1/pay/paymentTypeCodes`).pipe(
            map((response) => response.Result ? response.Result as PaymentType[] : response as PaymentType[])
        );
    }
}
