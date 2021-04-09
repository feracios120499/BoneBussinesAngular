import { LoginOtpModel } from './../../models/login-otp.model';
import { LogInModel } from './../../models/login.model';
import { AuthFacade } from 'src/app/@core/facades/auth.facade';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-auth-logon',
  templateUrl: './auth-logon.component.html',
  styleUrls: ['./auth-logon.component.scss']
})
export class AuthLogonComponent implements OnInit {

  constructor(private authFacade: AuthFacade) { }

  isNeedOtp$ = this.authFacade.isNeedOtp$;
  phone$ = this.authFacade.phone$;
  loginData: LogInModel | undefined = undefined;
  ngOnInit(): void {
  }

  logintOtp(otp: string): void {
    this.authFacade.loginOtp(otp);
  }

}
