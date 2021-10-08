
import { Token } from '@modules/auth/models/token.model';
import { CryptorKey } from '@services/sign/models/cryptor-key.model';
import { CryptorToken } from '@services/sign/models/cryptor-token.model';

export const AUTH_KEY = 'auth';

export interface CryptorState {
    token?: CryptorToken;
    key?: CryptorKey;
    tokens: CryptorToken[];
    keys: CryptorKey[];
}
export interface AuthState {
    cryptor: CryptorState;
    isLoading: boolean;
    phone: string | undefined;
    error: string | undefined;
    isNeedOtp: boolean;
    token: Token | undefined;
    userKey?: { key: CryptorKey, token: CryptorToken };
}

export const initialState: AuthState = {
    isLoading: false,
    phone: undefined,
    error: undefined,
    isNeedOtp: false,
    token: undefined,
    cryptor: {
        tokens: [],
        keys: []
    }
};
