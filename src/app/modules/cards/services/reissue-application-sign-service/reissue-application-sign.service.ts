import { Injectable } from '@angular/core';
import { ReissueSign } from '@models/cards/reissue-sign.model';
import { SignBuffer } from '@models/sign-buffer.model';
import { SignRequest } from '@models/sign-request.model';
import { SignSaveResponse } from '@models/sign-response.model';
import { Store } from '@ngrx/store';
import { AppSelectors } from '@store/app/selectors';
import { Observable } from 'rxjs';
import { BaseReissueApplicationSignService } from './base-reissue-application-sign.service';
import { DemoReissueApplicationSignService } from './demo-reissue-application-sign.service';
import { HttpReissueApplicationSignService } from './http-reissue-application-sign.service';

@Injectable({
  providedIn: 'root',
})
export class ReissueApplicationSignService implements BaseReissueApplicationSignService {
  private reissueApplicationSignService: BaseReissueApplicationSignService;

  constructor(
    demoReissueApplicationSignService: DemoReissueApplicationSignService,
    httpReissueApplicationSignService: HttpReissueApplicationSignService,
    private store: Store
  ) {
    this.reissueApplicationSignService = httpReissueApplicationSignService;
    this.store.select(AppSelectors.isDemo).subscribe((isDemo) => {
      if (isDemo) {
        this.reissueApplicationSignService = demoReissueApplicationSignService;
      } else {
        this.reissueApplicationSignService = httpReissueApplicationSignService;
      }
    });
  }

  getSignes(applicationId: number, clientId: string): Observable<ReissueSign[]> {
    return this.reissueApplicationSignService.getSignes(applicationId, clientId);
  }

  getBuffer(applicationsId: number, clientId: string): Observable<SignBuffer> {
    return this.reissueApplicationSignService.getBuffer(applicationsId, clientId);
  }

  getBuffers(applicationIds: number[], clientId: string): Observable<SignBuffer[]> {
    return this.reissueApplicationSignService.getBuffers(applicationIds, clientId);
  }

  addSignature(sign: SignRequest, clientId: string): Observable<SignSaveResponse> {
    return this.reissueApplicationSignService.addSignature(sign, clientId);
  }

  addSignatures(signatures: SignRequest[], clientId: string): Observable<SignSaveResponse[]> {
    return this.reissueApplicationSignService.addSignatures(signatures, clientId);
  }
}
