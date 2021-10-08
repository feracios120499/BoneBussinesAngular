import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignBuffer } from '@models/sign-buffer.model';
import { SignRequest } from '@models/sign-request.model';
import { SignSaveResponse } from '@models/sign-response.model';
import { BaseService } from '@services/base.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class PaymentsSignService extends BaseService {
    constructor(private http: HttpClient) {
        super();
    }

    getBuffer(paymentId: string, clientId: string): Observable<SignBuffer> {
        return this.getBuffers([paymentId], clientId).pipe(map(buffers => buffers[0]));
    }

    getBuffers(paymentIds: string[], clientId: string): Observable<SignBuffer[]> {
        return this.http.post<SignBuffer[]>(`api/v1/pay/sign/buffer/${clientId}`, paymentIds);
    }

    addSignature(sign: SignRequest, clientId: string): Observable<SignSaveResponse> {
        return this.addSignatures([sign], clientId).pipe(map(result => result[0]));
    }

    addSignatures(signatures: SignRequest[], clientId: string): Observable<SignSaveResponse[]> {
        return this.http.post<SignSaveResponse[]>(`api/v1/pay/sign/${clientId}`, signatures);
    }
}
