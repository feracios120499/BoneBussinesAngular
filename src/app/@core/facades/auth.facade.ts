import * as authActions from '@actions/auth.actions';
import { Injectable } from '@angular/core';
import { LogInModel } from '@modules/auth/models/login.model';
import { Store } from '@ngrx/store';
import { errorSelector, isLoadingSelector, isNeedOtpSelector, phoneSelector } from '@selectors/auth.selectors';

@Injectable({
  providedIn: 'root'
})
export class AuthFacade {

  // public loginResponse$: Observable<LoginResponse>;

  public isLoading$ = this.store.select(isLoadingSelector);
  public errorMessage$ = this.store.select(errorSelector);
  public phone$ = this.store.select(phoneSelector);
  public isNeedOtp$ = this.store.select(isNeedOtpSelector);

  constructor(private store: Store) {

  }
  login(loginData: LogInModel): void {
    this.store.dispatch(authActions.loginRequest({ data: loginData }));
  }

  loginOtp(otp: string): void {
    this.store.dispatch(authActions.tokenOtpRequest({ code: otp }));
  }
}
