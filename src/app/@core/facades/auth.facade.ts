import { isLoadingSelector } from './../../reducers/auth';
import { Observable } from 'rxjs';
import { LogInModel } from './../../modules/auth/models/login.model';
import { Injectable } from "@angular/core";
import { LoginResponse } from 'src/app/modules/auth/models/login.response';
import { select, Store } from '@ngrx/store';

@Injectable({
    providedIn: 'root'
})
export class AuthFacade {

    //public loginResponse$: Observable<LoginResponse>;

    public isLoading$: Observable<boolean> = this.store.pipe(select(isLoadingSelector));
    constructor(private store: Store) {

    }
    login(loginData: LogInModel): void {

    }
}