import { Injectable } from '@angular/core';
import { ChangePasswordModel } from '@modules/auth/models/change-password.model';
import { LoginModel, LoginSignModel } from '@modules/auth/models/login.model';
import { LoginResponse } from '@modules/auth/models/login.response';
import { PasswordRestrictions } from '@modules/auth/models/password-restrictions.model';
import { RestorePasswordModel } from '@modules/auth/models/restore-password.model';
import { Token } from '@modules/auth/models/token.model';
import { Store } from '@ngrx/store';
import { AppSelectors } from '@store/app/selectors';
import { Observable } from 'rxjs';
import { BaseAuthService } from './base-auth.service';
import { DemoAuthService } from './demo-auth.service';
import { HttpAuthService } from './http-auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements BaseAuthService {
  private authService: BaseAuthService;

  /**
   *
   */
  constructor(
    private demoAuthService: DemoAuthService,
    private httpAuthService: HttpAuthService,
    private store: Store
  ) {
    this.authService = httpAuthService;

    this.store.select(AppSelectors.isDemo).subscribe((isDemo) => {
      if (isDemo) {
        this.authService = demoAuthService;
      } else {
        this.authService = httpAuthService;
      }
    });
  }
  logIn(data: LoginModel): Observable<LoginResponse> {
    return this.authService.logIn(data);
  }
  loginWithData(data: LoginModel): Observable<Token> {
    return this.authService.loginWithData(data);
  }
  loginBySign(data: LoginSignModel): Observable<Token> {
    return this.authService.loginBySign(data);
  }
  loginWithOtp(data: LoginModel, otp: string): Observable<Token> {
    return this.authService.loginWithOtp(data, otp);
  }
  refreshToken(refreshToken: string | undefined, sessionId: string | undefined): Observable<Token> {
    return this.authService.refreshToken(refreshToken, sessionId);
  }
  restorePassword(data: RestorePasswordModel): Observable<void> {
    return this.authService.restorePassword(data);
  }
  restorePasswordWithOtp(data: RestorePasswordModel, confirmCode: string): Observable<void> {
    return this.authService.restorePasswordWithOtp(data, confirmCode);
  }
  getPassRestrictions(): Observable<PasswordRestrictions> {
    return this.authService.getPassRestrictions();
  }
  changePassword(data: ChangePasswordModel): Observable<void> {
    return this.authService.changePassword(data);
  }
  changePasswordWithOtp(data: ChangePasswordModel, confirmCode: string): Observable<void> {
    return this.authService.changePasswordWithOtp(data, confirmCode);
  }
}
