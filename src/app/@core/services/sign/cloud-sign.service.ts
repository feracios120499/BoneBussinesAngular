import { Injectable } from '@angular/core';
import { SignBuffer } from '@models/sign-buffer.model';
import { SignResponse } from '@models/sign-response.model';
import { Observable } from 'rxjs';
import { BaseSignService } from './sign-interface.service';

@Injectable({
  providedIn: 'root',
})
export class CloudSignService implements BaseSignService {
  signBuffer(buffer: SignBuffer): Observable<SignResponse> {
    throw new Error('Method not implemented.');
  }
  signFile(buffer: SignBuffer): Observable<SignResponse> {
    throw new Error('Method not implemented.');
  }
  signBuffers(buffers: SignBuffer[]): Observable<SignResponse[]> {
    throw new Error('Method not implemented.');
  }
  signFiles(buffers: SignBuffer[]): Observable<SignResponse[]> {
    throw new Error('Method not implemented.');
  }
}
