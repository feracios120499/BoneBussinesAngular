import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DateRange } from '@models/date-range.model';
import { DocumentSign } from '@models/document-sign.model';
import { SignBuffer } from '@models/sign-buffer.model';
import { SignRequest } from '@models/sign-request.model';
import { SignSaveResponse } from '@models/sign-response.model';
import { StatusCount } from '@models/status-count.model';
import { PaymentDetails } from '@modules/payments/models/payment-details.model';
import { PaymentHistory } from '@modules/payments/models/payment-history.model';
import { PaymentStatuses } from '@modules/payments/models/payment-status.type';
import { PaymentsCount } from '@modules/payments/models/payments-count.model';
import { PaymentsListItem } from '@modules/payments/models/payments-list-item.model';
import { PaymentsResponseResult } from '@modules/payments/models/payments-response.model';
import { BaseService } from '@services/base.service';
import dayjs from 'dayjs';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BasePaymentsService } from './base-payments.service';

@Injectable({
  providedIn: 'root',
})
export class HttpPaymentsService extends BaseService implements BasePaymentsService {
  constructor(private http: HttpClient) {
    super();
  }

  getCount(clientId: string): Observable<StatusCount> {
    return this.http.get<PaymentsCount[]>(`api/v1/pay/payments/count/${clientId}`).pipe(
      map((list) => {
        const count: StatusCount = {};
        list.forEach((value) => (count[value.statusId] = value.count));
        return count;
      })
    );
  }

  getPayments(status: PaymentStatuses, range: DateRange, clientId: string): Observable<PaymentsListItem[]> {
    const query = `?$filter=(DateCreated ge ${range.start.format('YYYY-MM-DD')} and DateCreated le ${range.end
      .add(1, 'days')
      .format('YYYY-MM-DD')}) `;

    let statusQuery = '';
    if (status == 'ONMYSIGN') {
      statusQuery = `and (StatusCode eq 'ONSIGN') and (IsNeedMySign eq true)`;
    } else {
      statusQuery = `and (StatusCode eq '${status}')`;
    }
    return this.http.get<PaymentsListItem[]>(
      `api/v1/pay/payments/list/${clientId}${query}${statusQuery}&$orderby=Id desc`
    );
  }

  getPayment(id: number, clientId: string): Observable<PaymentDetails> {
    return this.http.get<PaymentDetails>(`api/v1/pay/payments/${id}/${clientId}`);
  }

  printPayments(ids: number[], clientId: string): Observable<string> {
    return this.http.post(`api/v1/pay/payments/print/HTML/${clientId}`, ids, { responseType: 'text' });
  }

  deletePayments(ids: number[], clientId: string): Observable<PaymentsResponseResult[]> {
    return this.http.post<PaymentsResponseResult[]>(`api/v1/pay/payments/delete/${clientId}`, ids);
  }

  sendOnSign(ids: number[], clientId: string): Observable<PaymentsResponseResult[]> {
    return this.http.put<PaymentsResponseResult[]>(`api/v1/pay/payments/onSign/${clientId}`, ids);
  }

  getBuffers(ids: number[], clientId: string): Observable<SignBuffer[]> {
    return this.http.post<SignBuffer[]>(`api/v1/pay/sign/buffer/${clientId}`, ids);
  }

  addSignatures(signatures: SignRequest[], clientId: string): Observable<SignSaveResponse[]> {
    return this.http.post<SignSaveResponse[]>(`api/v1/pay/sign/${clientId}`, signatures);
  }

  sendToBank(ids: number[], clientId: string): Observable<PaymentsResponseResult[]> {
    return this.http.put<PaymentsResponseResult[]>(`api/v1/pay/payments/toBank/${clientId}`, ids);
  }

  getHistory(id: number, clientId: string): Observable<PaymentHistory[]> {
    return this.http.get<PaymentHistory[]>(`api/v1/pay/history/${id}/${clientId}`);
  }

  getSignes(id: number, clientId: string): Observable<DocumentSign[]> {
    return this.http.get<DocumentSign[]>(`api/v1/pay/sign/${id}/${clientId}`);
  }
}
