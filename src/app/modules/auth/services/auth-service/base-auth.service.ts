import { ChangePasswordModel } from '@modules/auth/models/change-password.model';
import { LoginModel, LoginSignModel } from '@modules/auth/models/login.model';
import { LoginResponse } from '@modules/auth/models/login.response';
import { PasswordRestrictions } from '@modules/auth/models/password-restrictions.model';
import { RestorePasswordModel } from '@modules/auth/models/restore-password.model';
import { Token } from '@modules/auth/models/token.model';
import { Observable } from 'rxjs';

export abstract class BaseAuthService {
  abstract logIn(data: LoginModel): Observable<LoginResponse>;
  abstract loginWithData(data: LoginModel): Observable<Token>;
  abstract loginBySign(data: LoginSignModel): Observable<Token>;
  abstract loginWithOtp(data: LoginModel, otp: string): Observable<Token>;
  abstract refreshToken(refreshToken: string | undefined, sessionId: string | undefined): Observable<Token>;
  abstract restorePassword(data: RestorePasswordModel): Observable<void>;
  abstract restorePasswordWithOtp(data: RestorePasswordModel, confirmCode: string): Observable<void>;
  abstract getPassRestrictions(): Observable<PasswordRestrictions>;
  abstract changePassword(data: ChangePasswordModel): Observable<void>;
  abstract changePasswordWithOtp(data: ChangePasswordModel, confirmCode: string): Observable<void>;
}
