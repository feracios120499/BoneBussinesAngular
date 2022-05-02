import { Injectable } from '@angular/core';
import { LoginModel, LoginSignModel } from '@modules/auth/models/login.model';
import { LoginResponse } from '@modules/auth/models/login.response';
import { Token } from '@modules/auth/models/token.model';
import { Observable, of } from 'rxjs';
import { BaseAuthService } from './base-auth.service';

@Injectable({
  providedIn: 'root',
})
export class DemoAuthService implements BaseAuthService {
  private token: Token = {
    accessToken:
      'm1lU25L8BNpp0Zcbe49I1k2ddOq48ds9W2Z_ryv6lxxqv--QOijuuTpxrvdIX__Otrhy4Wp6_ZbfcH5IHikLzs_vuvIaNDKuRGLWmouvLVpjADLFr2UHE4484mAxq3zg11lwoO5oBbhi6KIarUcUb4aEhTxRwLVoEazBbB07pbNUtKDe1T1vt1WRJuu6cxD5cMsJKrJintP2FaZpXX9D7DlvsI42PlzBwuqKgDYxAPs5hT3vzW9dAQePlCkehHu9GIlMD-MhTzWgYno5x6AKWQNbbFWlgrrQGQXpSeiE7MPLHYP_PsrfduS8Iut0fkTYtBea8Ov5b7OvQB9rLumxFfmcGKfmqTi76yFgqf-vO1PLGfroYq7P5vJ_zax1iIDMD2dP3529gK2L06-FhFYr-Nm3XLAjtTREZdQt8O93BRYErgO8qJg-uaCebXedHLchj7OknRJt4gpBo-m3b64EcKIupwnMxDQ1flVo9h1wqm9MVXZsEXuv2AYneu5OplzR9s3s9W-gPkyIkR7B8yl56EYmBMCQoZ3z6VyoPly6M4Lyoe5iVKLpv69kElDo2ZW8S8jszX-emqoKCfIJ1rqSKcIuC_T2NFd4uWrO_TDjsUfzSnSqN6-WbY3gR-zfbyu1XWAW4nDqVnZyKqfT-oaA-T6V-mt2l1IA532DdSs_nChnRDy6WWAi28kcWcs94PADDio0ZReNdOUOTGgQJflEpg',
    tokenType: 'bearer',
    refreshToken: '62bceb342d374ed58ee41f7e50df5e40',
    sessionId: '05eade74-0004-4e5c-a8be-72b805a7543f',
    userId: '16784813-8e03-4680-8ce1-5793ed4974c7',
    clientId: 'CORP-LIGHT-WEB',
    expiresIn: '123',
    expires: '123',
    issued: new Date(),
  };

  logIn(data: LoginModel): Observable<LoginResponse> {
    const response: LoginResponse = {
      type: 'Token',
    };
    return of(response);
  }

  loginWithData(data: LoginModel): Observable<Token> {
    return of(this.token);
  }

  loginBySign(data: LoginSignModel): Observable<Token> {
    return of(this.token);
  }

  loginWithOtp(data: LoginModel, otp: string): Observable<Token> {
    return of(this.token);
  }

  refreshToken(refreshToken: string | undefined, sessionId: string | undefined): Observable<Token> {
    return of(this.token);
  }
}
