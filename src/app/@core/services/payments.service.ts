import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateWithinCountryModel } from '@models/payments/create-within-country.modal';
import { StatusResponse } from '@models/status-response.model';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';


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


    createWithinCountryPayment(payment: CreateWithinCountryModel, clientId: string): Observable<StatusResponse> {
        return this.http.post<StatusResponse>(`api/v1/pay/InCountry/${clientId}`, payment);
    }
}
