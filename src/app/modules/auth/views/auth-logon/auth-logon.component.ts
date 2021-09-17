import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthActions } from '@store/auth/actions';
import { AuthSelectors } from '@store/auth/selectors';

@Component({
  selector: 'app-auth-logon',
  templateUrl: './auth-logon.component.html',
  styleUrls: ['./auth-logon.component.scss']
})
export class AuthLogonComponent implements OnInit {

  constructor(private store: Store) { }

  isNeedOtp$ = this.store.select(AuthSelectors.isNeedOtp);
  phone$ = this.store.select(AuthSelectors.phone);

  ngOnInit(): void {
  }

  logintOtp(otp: string): void {
    this.store.dispatch(AuthActions.loginWithOtpRequest(otp));
  }

}
