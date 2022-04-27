import { Injectable } from '@angular/core';
import { SignBuffer } from '@models/sign-buffer.model';
import { SignResponse } from '@models/sign-response.model';
import { Store } from '@ngrx/store';
import { AppSelectors } from '@store/app/selectors';
import { Observable } from 'rxjs';
import { BarsCryptorService } from './bars-cryptor.service';
import { CloudSignService } from './cloud-sign.service';
import { BaseSignService } from './sign-interface.service';

@Injectable({
  providedIn: 'root',
})
export class SignService implements BaseSignService {
  /**
   *
   */
  private signService!: BaseSignService;
  constructor(
    private store: Store,
    private barsCryptorService: BarsCryptorService,
    private cloudSignService: CloudSignService
  ) {
    this.store.select(AppSelectors.signProvider).subscribe((signProvider) => {
      if (signProvider === 'BarsCryptor') {
        this.signService = barsCryptorService;
      } else {
        this.signService = cloudSignService;
      }
    });
  }
  signBuffer(buffer: SignBuffer): Observable<SignResponse> {
    return this.signService.signBuffer(buffer);
  }
  signFile(buffer: SignBuffer): Observable<SignResponse> {
    return this.signService.signFile(buffer);
  }
  signBuffers(buffers: SignBuffer[]): Observable<SignResponse[]> {
    return this.signService.signBuffers(buffers);
  }
  signFiles(buffers: SignBuffer[]): Observable<SignResponse[]> {
    return this.signService.signFiles(buffers);
  }
}
