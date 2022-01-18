import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreatePaymentModel } from '@models/payments/create-payment.model';
import { PaymentCommon } from '@models/payments/payment-common.model';
import { StatusResponse } from '@models/status-response.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base.service';


@Injectable({
    providedIn: 'root'
})
export class PaymentsService extends BaseService {
    /**
     *
     */
    constructor(private http: HttpClient) {
        super();
    }

    getPayment(id: string, clientId: string): Observable<PaymentCommon> {
        return this.http.get<PaymentCommon>(`api/v1/pay/payments/${id}/${clientId}`);
    }


    createWithinCountryPayment(payment: CreatePaymentModel, clientId: string): Observable<StatusResponse> {
        return this.http.post<StatusResponse>(`api/v1/pay/InCountry/${clientId}`, payment);
    }

    createMyAccountsPayment(payment: CreatePaymentModel, clientId: string): Observable<StatusResponse> {
        return this.http.post<StatusResponse>(`api/v1/pay/betweenUserAccounts/${clientId}`, payment);
    }

    onSign(id: string, clientId: string): Observable<StatusResponse> {
        return this.onSignMany([id], clientId).pipe(map(response => response[0]));
    }

    onSignMany(ids: string[], clientId: string): Observable<StatusResponse[]> {
        return this.http.put<StatusResponse[]>(`api/v1/pay/payments/onSign/${clientId}`, ids);
    }

    toBank(id: string, clientId: string): Observable<StatusResponse> {
        return this.toBankMany([id], clientId).pipe(map(response => response[0]));
    }

    toBankMany(ids: string[], clientId: string): Observable<StatusResponse[]> {
        return this.http.put<StatusResponse[]>(`api/v1/pay/payments/toBank/${clientId}`, ids);
    }
}
