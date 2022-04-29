import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReissueSign } from '@models/cards/reissue-sign.model';
import { SignBuffer } from '@models/sign-buffer.model';
import { SignRequest } from '@models/sign-request.model';
import { SignSaveResponse } from '@models/sign-response.model';
import { BaseService } from '@services/base.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ReissueApplicationSignService extends BaseService {
  constructor(private http: HttpClient) {
    super();
  }

  getSignes(applicationId: number, clientId: string): Observable<ReissueSign[]> {
    return this.http.get<ReissueSign[]>(`api/v1/corpcards/reissue/signs/${applicationId}/${clientId}`);
  }

  getBuffer(applicationsId: number, clientId: string): Observable<SignBuffer> {
    return this.getBuffers([applicationsId], clientId).pipe(map((buffers) => buffers[0]));
  }

  getBuffers(applicationIds: number[], clientId: string): Observable<SignBuffer[]> {
    return this.http.post<SignBuffer[]>(`api/v1/corpcards/reissue/buffer/${clientId}`, applicationIds);
  }

  addSignature(sign: SignRequest, clientId: string): Observable<SignSaveResponse> {
    return this.addSignatures([sign], clientId).pipe(map((result) => result[0]));
  }

  addSignatures(signatures: SignRequest[], clientId: string): Observable<SignSaveResponse[]> {
    return this.http.post<SignSaveResponse[]>(`api/v1/corpcards/reissue/sign/${clientId}`, signatures);
  }
}
