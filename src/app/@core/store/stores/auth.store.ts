import { LogInModel } from '@modules/auth/models/login.model';
import { Token } from '@modules/auth/models/token.model';

export const AUTH_KEY = 'auth';

export interface AuthState {
    isLoading: boolean;
    loginData: LogInModel | undefined;
    phone: string | undefined;
    error: string | undefined;
    isNeedOtp: boolean;
    token: Token | undefined;
}

export const initialState: AuthState = {
    isLoading: false,
    loginData: undefined,
    phone: undefined,
    error: undefined,
    isNeedOtp: false,
    token: undefined
};
