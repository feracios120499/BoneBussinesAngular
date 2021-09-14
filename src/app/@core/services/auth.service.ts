import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { LoginOtpModel } from './../../modules/auth/models/login-otp.model';
import { LogInModel } from './../../modules/auth/models/login.model';
import { LoginResponse } from './../../modules/auth/models/login.response';
import { Token } from './../../modules/auth/models/token.model';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService {

  /**
   *
   */
  constructor(private http: HttpClient) {
    super();
  }

  logIn(loginData: LogInModel): Observable<LoginResponse> {
    return this.http.post<LoginResponse>('api/v1/auth/login', loginData);
  }

  loginWithData(loginData: LogInModel | undefined): Observable<Token> {
    const params = new HttpParams()
      .set('grant_type', 'password')
      .set('username', loginData?.Username || '')
      .set('device', '{"ApplicationId":"CORP-LIGHT-WEB","DeviceModel":"Chrome","ApplicationVersion":"1.4.0","Os":"Windows64","Uuid":"ecbe8653-d63f-428a-91d9-c1ac7040443f","OsVersion":"Unknown"}')
      .set('client_id', 'CORP-LIGHT-WEB') // TODO add to environment
      .set('passphrase', loginData?.Password || '');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };
    return this.http.post<Token>('api/v1/auth/token', params, httpOptions);
  }

  loginOtp(loginData: LoginOtpModel): Observable<Token> {
    const params = new HttpParams()
      .set('grant_type', 'password')
      .set('username', loginData.Username || '')
      .set('userdata', loginData.UserData)
      .set('client_id', 'CORP-LIGHT-WEB') // TODO add to environment
      .set('passphrase', loginData.Password || '')
      .set('confirmCode', loginData.ConfirmCode || '');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };
    return this.http.post<Token>('api/v1/auth/token', params, httpOptions);
  }

  refreshToken(refreshToken: string | undefined, sessionId: string | undefined): Observable<Token> {
    const params = new HttpParams()
      .set('grant_type', 'refresh_token')
      .set('refresh_token', refreshToken || '')
      .set('sessionId', sessionId || '')
      .set('client_id', 'CORP-LIGHT-WEB'); // TODO add to environment

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };
    return this.http.post<Token>('api/v1/auth/token', params, httpOptions);
  }
}
