import { Observable } from 'rxjs';
import { ReissueSign } from '@models/cards/reissue-sign.model';
import { SignBuffer } from '@models/sign-buffer.model';
import { SignRequest } from '@models/sign-request.model';
import { SignSaveResponse } from '@models/sign-response.model';

export abstract class BaseReissueApplicationSignService {
  abstract getSignes(applicationId: number, clientId: string): Observable<ReissueSign[]>;

  abstract getBuffer(applicationsId: number, clientId: string): Observable<SignBuffer>;

  abstract getBuffers(applicationIds: number[], clientId: string): Observable<SignBuffer[]>;

  abstract addSignature(sign: SignRequest, clientId: string): Observable<SignSaveResponse>;

  abstract addSignatures(signatures: SignRequest[], clientId: string): Observable<SignSaveResponse[]>;
}
