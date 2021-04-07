import { Token } from './../../modules/auth/models/token.model';
import { LoginResponse } from './../../modules/auth/models/login.response';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LogInModel } from './../../modules/auth/models/login.model';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';

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

    loginWithData(loginData: LogInModel): Observable<Token> {
        const params = new HttpParams()
            .set('grant_type', "password")
            .set('username', loginData.Username!)
            .set('userdata', loginData.UserData)
            .set('client_id', 'CORP-LIGHT-WEB') //TODO add to environment
            .set('password', loginData.Password!);

        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        };
        return this.http.post<Token>('api/v1/auth/token', params, httpOptions);
    }
}
