
import { Token } from '@modules/auth/models/token.model';

export const AUTH_KEY = 'auth';

export interface AuthState {
    isLoading: boolean;
    phone: string | undefined;
    error: string | undefined;
    isNeedOtp: boolean;
    token: Token | undefined;
}

export const initialState: AuthState = {
    isLoading: false,
    phone: undefined,
    error: undefined,
    isNeedOtp: false,
    token: undefined
};
