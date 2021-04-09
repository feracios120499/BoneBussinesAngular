import { Observable } from 'rxjs';
import { LoginOtpModel } from './../../modules/auth/models/login-otp.model';
import { LogInModel } from './../../modules/auth/models/login.model';
import { Injectable } from "@angular/core";
import { LoginResponse } from 'src/app/modules/auth/models/login.response';
import { select, Store } from '@ngrx/store';
import { errorSelector, isLoadingSelector, isNeedOtpSelector, loginDataSelector, phoneSelector } from '@selectors/auth.selectors';
import * as authActions from '@actions/auth.actions';

@Injectable({
    providedIn: 'root'
})
export class AuthFacade {

    //public loginResponse$: Observable<LoginResponse>;

    public isLoading$: Observable<boolean> = this.store.pipe(select(isLoadingSelector));
    public errorMessage$: Observable<string | undefined> = this.store.pipe<string | undefined>(select(errorSelector));
    public phone$: Observable<string | undefined> = this.store.pipe(select(phoneSelector));
    public isNeedOtp$: Observable<boolean> = this.store.pipe(select(isNeedOtpSelector));
    public loginData$: Observable<LogInModel | undefined> = this.store.pipe(select(loginDataSelector));
    constructor(private store: Store) {

    }
    login(loginData: LogInModel): void {

    }

    loginOtp(otp: string): void {
        this.store.dispatch(authActions.tokenOtpRequest({ code: otp }));
    }
}
