import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignBuffer } from '@models/sign-buffer.model';
import { SignResponse } from '@models/sign-response.model';
import { AuthSelectors } from '@modules/auth/store/selectors';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { forkJoinConcurrent } from '@store/shared';
import { camelCase, isPlainObject, startCase } from 'lodash';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { CryptorKey, CryptorKeysResponse } from './models/cryptor-key.model';
import { CryptorResponse } from './models/cryptor-response.model';
import { CryptorSign } from './models/cryptor-sign.model';
import { CryptorToken, CryptorTokensResponse } from './models/cryptor-token.model';
import { BaseSignService } from './sign-interface.service';

export const CRYPTOR_URL = 'https://local.barscryptor.net:31139';

@Injectable({
  providedIn: 'root',
})
export class BarsCryptorService implements BaseSignService {
  key?: { key: CryptorKey; token: CryptorToken };
  data?: {
    idOper: string;
    keyId: string;
    moduleName: string;
    tokenId: string;
  };
  constructor(private http: HttpClient, private store: Store, private translateService: TranslateService) {
    this.store.select(AuthSelectors.currentCryptorKey).subscribe((key) => {
      this.key = key;
      this.data = {
        idOper: key?.key.id as string,
        keyId: key?.key.id as string,
        moduleName: key?.token.moduleName || 'vega2',
        tokenId: key?.token.tokenId as string,
      };
    });
  }
  getTokens(): Observable<CryptorToken[]> {
    return this.http.post<CryptorTokensResponse>(`${CRYPTOR_URL}/tokens`, {} as never).pipe(
      map((response) => this.mapResponse(response, response.tokens)),
      map((tokens) => tokens.sort((a, b) => (a.tokenId === 'vega2' ? -1 : 1)))
    );
  }

  init(token: CryptorToken): Observable<CryptorResponse> {
    return this.http
      .post<CryptorResponse>(`${CRYPTOR_URL}/init`, this.toPascalCase(token))
      .pipe(map((response) => this.mapResponse(response, response)));
  }

  getKeys(token: CryptorToken): Observable<CryptorKey[]> {
    return this.http
      .post<CryptorKeysResponse>(`${CRYPTOR_URL}/keys`, this.toPascalCase(token))
      .pipe(map((response) => this.mapResponse(response, response.keys)));
  }

  signBuffer(buffer: SignBuffer): Observable<SignResponse> {
    this.checkKey();

    return this.sign({
      ...this.data,
      buffer: buffer.buffer,
    }).pipe(
      map((sign) => {
        const signResponse: SignResponse = {
          id: buffer.id,
          number: buffer.number,
          isSuccess: true,
          buffer: buffer.buffer,
          signature: sign,
          signProviderType: 'BarsCryptor',
        };
        return signResponse;
      }),
      catchError((error) => {
        const signResponse: SignResponse = {
          id: buffer.id,
          number: buffer.number,
          isSuccess: false,
          buffer: buffer.buffer,
          signature: '',
          signProviderType: 'BarsCryptor',
          error: {
            message: error.message,
          },
        };
        return of(signResponse);
      })
    );
  }

  signBufferByKey(buffer: string, key: CryptorKey, token: CryptorToken): Observable<{ buffer: string; sign: string }> {
    return this.sign({
      idOper: key.id,
      keyId: key.id,
      moduleName: token.moduleName,
      tokenId: token.tokenId,
      buffer,
    }).pipe(map((sign) => ({ buffer, sign })));
  }

  signFile(buffer: SignBuffer): Observable<SignResponse> {
    this.checkKey();

    throw new Error('Method not implemented.');
  }

  signBuffers(buffers: SignBuffer[]): Observable<SignResponse[]> {
    this.checkKey();

    return forkJoinConcurrent(
      buffers.map((buffer) => this.signBuffer(buffer)),
      1
    );
  }

  signFiles(buffers: SignBuffer[]): Observable<SignResponse[]> {
    this.checkKey();

    throw new Error('Method not implemented.');
  }

  private sign(data: any): Observable<string> {
    return this.http
      .post<CryptorSign>(`${CRYPTOR_URL}/sign`, this.toPascalCase(data))
      .pipe(map((response) => this.mapResponse(response, response.sign)));
  }

  private checkKey(): void {
    if (!this.key) {
      throw new Error(this.translateService.instant('components.supDocuments.errors.ecpLogin'));
    }
  }

  private mapResponse<T>(response: CryptorResponse, data: T): T {
    if (response.state === 'OK') {
      return data;
    }

    throw new Error(response.error);
  }

  private toPascalCase(obj: any): any {
    if (Array.isArray(obj)) {
      return obj.map((v) => this.toPascalCase(v));
    } else if (isPlainObject(obj)) {
      return Object.keys(obj).reduce(
        (result, key) => ({
          ...result,
          [startCase(camelCase(key)).replace(/ /g, '')]: this.toPascalCase(obj[key]),
        }),
        {}
      );
    }
    return obj;
  }
}
