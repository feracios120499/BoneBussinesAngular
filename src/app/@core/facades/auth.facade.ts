import { Injectable } from '@angular/core';
import { LogInModel } from '@modules/auth/models/login.model';
import { Store } from '@ngrx/store';
import { AuthActions } from '@store/auth/actions';
import { AuthSelectors } from '@store/auth/selectors';

@Injectable({
  providedIn: 'root'
})
export class AuthFacade {

  // public loginResponse$: Observable<LoginResponse>;

  public isLoading$ = this.store.select(AuthSelectors.isLoading);
  public errorMessage$ = this.store.select(AuthSelectors.error);
  public phone$ = this.store.select(AuthSelectors.phone);
  public isNeedOtp$ = this.store.select(AuthSelectors.isNeedOtp);

  constructor(private store: Store) {

  }
  login(loginData: LogInModel): void {
    this.store.dispatch(AuthActions.loginRequest({ data: loginData }));
  }

  loginOtp(otp: string): void {
    this.store.dispatch(AuthActions.tokenOtpRequest({ code: otp }));
  }
}
