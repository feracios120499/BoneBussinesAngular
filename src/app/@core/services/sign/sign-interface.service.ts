import { SignBuffer } from '@models/sign-buffer.model';
import { SignResponse } from '@models/sign-response.model';
import { Observable } from 'rxjs';

export interface BaseSignService {
  signBuffer(buffer: SignBuffer): Observable<SignResponse>;

  signFile(buffer: SignBuffer): Observable<SignResponse>;

  signBuffers(buffers: SignBuffer[]): Observable<SignResponse[]>;

  signFiles(buffers: SignBuffer[]): Observable<SignResponse[]>;
}
