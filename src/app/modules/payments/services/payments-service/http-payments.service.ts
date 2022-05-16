import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DateRange } from '@models/date-range.model';
import { StatusCount } from '@models/status-count.model';
import { PaymentStatuses } from '@modules/payments/models/payment-status.type';
import { PaymentsCount } from '@modules/payments/models/payments-count.model';
import { PaymentsListItem } from '@modules/payments/models/payments-list-item.model';
import { BaseService } from '@services/base.service';
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
}
