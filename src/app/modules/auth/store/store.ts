import { Token } from '@modules/auth/models/token.model';
import { CryptorKey } from '@services/sign/models/cryptor-key.model';
import { CryptorToken } from '@services/sign/models/cryptor-token.model';
import { AuthLoading } from '../models/auth-loading.type';
import { ChangePasswordModel } from '../models/change-password.model';
import { PasswordRestrictions } from '../models/password-restrictions.model';

export const AUTH_KEY = 'auth';

export interface CryptorState {
  token?: CryptorToken;
  key?: CryptorKey;
  tokens: CryptorToken[];
  keys: CryptorKey[];
}
export interface AuthState {
  cryptor: CryptorState;
  loadings: AuthLoading[];
  phone: string | undefined;
  error: string | undefined;
  isNeedOtp: boolean;
  token: Token | undefined;
  userKey?: { key: CryptorKey; token: CryptorToken };
  passRestrictions?: PasswordRestrictions;
  techPassword?: string;
  changePasswordData?: ChangePasswordModel;
}

export const initialState: AuthState = {
  loadings: [],
  phone: undefined,
  error: undefined,
  isNeedOtp: false,
  token: undefined,
  cryptor: {
    tokens: [],
    keys: [],
  },
};
