import { LoginModel } from '@modules/auth/models/login.model';
import { LoginResponse } from '@modules/auth/models/login.response';
import { Token } from '@modules/auth/models/token.model';
import { createAction, props } from '@ngrx/store';
import { createHTTPActions } from '@store/shared';
import { Profile } from 'src/app/@shared/models/profile.model';

export namespace AuthActions {

    export const [
        loginRequest,
        loginSuccess,
        loginFailure
    ] = createHTTPActions<LoginModel, LoginResponse, string>('[AUTH] login');

    export const [
        loginWithOtpRequest,
        loginWithOtpSuccess,
        loginWithOtpFailure
    ] = createHTTPActions<string, Token, string>('[AUTH] login with otp');


    export const [
        tokenRequest,
        tokenSuccess,
        tokenFailure
    ] = createHTTPActions<LoginModel, Token, string>('[AUTH] token');


    export const resetLogin = createAction(
        '[AUTH] reset login data'
    );

    // setNeedOtp action
    export const setNeedOtp = createAction(
        '[AUTH] sett need otp',
        props<{ phone: string }>()
    );


    export const [
        loadProfileRequest,
        loadProfileSuccess,
        loadProfileFailure
    ] = createHTTPActions<void, Profile, string>('[AUTH] load profile');

    // setToken action
    export const setToken = createAction(
        '[AUTH] set token',
        props<{ token: Token }>()
    );

    // logout action
    export const logout = createAction(
        '[AUTH] logout'
    );

    export const logoutByUser = createAction(
        '[AUTH] logout by user'
    );
}






