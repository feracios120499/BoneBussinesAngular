import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Browsers } from '@modules/auth/models/browser.type';
import { Device } from '@modules/auth/models/device.model';
import { LoginModel, LoginSignModel } from '@modules/auth/models/login.model';
import { OS } from '@modules/auth/models/os.type';
import { Observable } from 'rxjs';

import { LoginResponse } from './../../modules/auth/models/login.response';
import { Token } from './../../modules/auth/models/token.model';
import { BaseService } from './base.service';


const CONTENT_TYPE = 'Content-Type';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService {
  device: Device;
  constructor(private http: HttpClient) {
    super();
    this.device = {
      applicationId: 'CORP-LIGHT-WEB',
      deviceModel: this.detectBrowser(),
      applicationVersion: '2.0.0',
      os: this.detectOS(),
      uuid: this.getUuid(),
      osVersion: 'Unknown'
    };
  }

  logIn(data: LoginModel): Observable<LoginResponse> {
    return this.http.post<LoginResponse>('api/v1/auth/login', { ...data, device: this.device });
  }

  loginWithData(data: LoginModel): Observable<Token> {
    const params = new HttpParams()
      .set('grant_type', 'password')
      .set('username', data.userName)
      .set('device', JSON.stringify(this.device))
      .set('client_id', 'CORP-LIGHT-WEB') // TODO add to environment
      .set('passphrase', data.password);

    return this.getToken(params);
  }

  loginBySign(data: LoginSignModel): Observable<Token> {
    const params = new HttpParams()
      .set('grant_type', 'password')
      .set('mode', 'key')
      .set('KeyId', data.keyId)
      .set('Buffer', data.buffer)
      .set('Sign', data.sign)
      .set('ModuleName', data.moduleName)
      .set('TokenId', data.tokenId)
      .set('device', JSON.stringify(this.device))
      .set('client_id', 'CORP-LIGHT-WEB'); // TODO add to environment

    return this.getToken(params);
  }

  loginWithOtp(data: LoginModel, otp: string): Observable<Token> {
    const params = new HttpParams()
      .set('grant_type', 'password')
      .set('username', data.userName)
      .set('device', JSON.stringify(this.device))
      .set('client_id', 'CORP-LIGHT-WEB') // TODO add to environment
      .set('passphrase', data.password)
      .set('confirmCode', otp);

    return this.getToken(params);
  }

  private getToken(params: HttpParams): Observable<Token> {
    const httpOptions = {
      headers: new HttpHeaders()
    };
    httpOptions.headers.append(CONTENT_TYPE, 'application/x-www-form-urlencoded');
    return this.http.post<Token>('api/v1/auth/token', params, httpOptions);
  }

  refreshToken(refreshToken: string | undefined, sessionId: string | undefined): Observable<Token> {
    const params = new HttpParams()
      .set('grant_type', 'refresh_token')
      .set('refresh_token', refreshToken || '')
      .set('sessionId', sessionId || '')
      .set('client_id', 'CORP-LIGHT-WEB'); // TODO add to environment

    const httpOptions = {
      headers: new HttpHeaders()
    };
    httpOptions.headers.append(CONTENT_TYPE, 'application/x-www-form-urlencoded');
    return this.http.post<Token>('api/v1/auth/token', params, httpOptions);
  }

  private getUuid(): string {
    let uuid = localStorage.getItem('uuid');
    if (!uuid) {
      uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        // tslint:disable-next-line: no-bitwise
        const r = Math.random() * 16 | 0; const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
      localStorage.setItem('uuid', uuid);
    }
    return uuid;
  }

  private detectOS(): OS {
    if (navigator.appVersion.indexOf('Mac') !== -1) {
      return 'MacOS';
    }

    if (navigator.appVersion.indexOf('Linux') !== -1) {
      return 'Linux';
    }

    if (navigator.appVersion.indexOf('Win') !== -1) {
      if (navigator.userAgent.indexOf('WOW64') > -1 || navigator.userAgent.indexOf('Win64') > -1 || window.navigator.platform === 'Win64') {
        return 'Windows64';
      } else {
        return 'Windows32';
      }
    }
    return 'Unknown';
  }

  private detectBrowser(): Browsers {
    if (!navigator) {
      return 'Unknown';
    }
    if (!navigator.userAgent) {
      return 'Unknown';
    }

    if ((navigator.userAgent.indexOf('Opera') || navigator.userAgent.indexOf('OPR')) !== -1) {
      return 'Opera';
    } else if (navigator.userAgent.indexOf('Chrome') !== -1) {
      return 'Chrome';
    } else if (navigator.userAgent.indexOf('Safari') !== -1) {
      return 'Safari';
    } else if (navigator.userAgent.indexOf('Firefox') !== -1) {
      return 'Firefox';
    } else if ((navigator.userAgent.indexOf('MSIE') !== -1) || (!!(document as any).documentMode === true)) {
      return 'IE'; // crap
    } else {
      return 'Unknown';
    }
  }
}
