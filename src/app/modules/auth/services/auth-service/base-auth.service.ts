import { LoginModel, LoginSignModel } from '@modules/auth/models/login.model';
import { LoginResponse } from '@modules/auth/models/login.response';
import { Token } from '@modules/auth/models/token.model';
import { Observable } from 'rxjs';

export abstract class BaseAuthService {
  abstract logIn(data: LoginModel): Observable<LoginResponse>;
  abstract loginWithData(data: LoginModel): Observable<Token>;
  abstract loginBySign(data: LoginSignModel): Observable<Token>;
  abstract loginWithOtp(data: LoginModel, otp: string): Observable<Token>;
  abstract refreshToken(refreshToken: string | undefined, sessionId: string | undefined): Observable<Token>;
}
