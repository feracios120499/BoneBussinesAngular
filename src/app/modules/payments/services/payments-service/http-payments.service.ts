import { formatDate } from '@angular/common';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DateRange } from '@models/date-range.model';
import { DocumentSign } from '@models/document-sign.model';
import { FileModel } from '@models/file.model';
import { CreatePaymentModel } from '@models/payments/create-payment.model';
import { SignBuffer } from '@models/sign-buffer.model';
import { SignRequest } from '@models/sign-request.model';
import { SignSaveResponse } from '@models/sign-response.model';
import { StatusCount } from '@models/status-count.model';
import { StatusResponse } from '@models/status-response.model';
import { ImportResponse } from '@modules/payments/models/import-response.model';
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

  exportPayments(ids: number[], format: string, clientId: string): Observable<FileModel> {
    return this.http
      .put<Blob>(`api/v1/pay/payments/export/${format}/${clientId}`, ids, {
        responseType: 'blob' as 'json',
        observe: 'response',
      })
      .pipe(
        map((response) => this.mapFile(response)),
        map((result) => ({ ...result, name: result.name || `payments.${format.toLowerCase()}` }))
      );
  }

  importCommonPayments(files: File[], clientId: string): Observable<ImportResponse> {
    const formData = new FormData();
    files.forEach((file, index) => formData.append(`file[${index}]`, file, file.name));
    return this.http.post<ImportResponse>(`/api/v1/pay/payments/import/validate/${clientId}`, formData);
  }

  createPayments(payments: CreatePaymentModel[], clientId: string): Observable<StatusResponse[]> {
    return this.http.post<StatusResponse[]>(`api/v1/pay/payments/${clientId}`, payments);
  }

  private mapFile(res: HttpResponse<Blob>): FileModel {
    const file: FileModel = {
      blob: res.body ? res.body : undefined,
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
      } else {
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
}
