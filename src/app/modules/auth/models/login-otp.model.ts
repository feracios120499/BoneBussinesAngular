import { LogInModel } from './login.model';

export class LoginOtpModel extends LogInModel {

  public ConfirmCode: string | undefined;

  constructor(code: string | undefined, loginData: LogInModel | undefined) {
    super();
    this.ConfirmCode = code;
    this.Password = loginData?.Password;
    this.Username = loginData?.Password;
  }
}
