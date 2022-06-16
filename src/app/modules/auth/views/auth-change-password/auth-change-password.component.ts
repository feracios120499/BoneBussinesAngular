import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { required } from '@store/shared';
import { AuthActions } from '@modules/auth/store/actions';
import { AuthSelectors } from '@modules/auth/store/selectors';

@Component({
  selector: 'app-auth-change-password',
  templateUrl: './auth-change-password.component.html',
  styleUrls: ['./auth-change-password.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthChangePasswordComponent implements OnInit {
  isNeedOtp$: Observable<boolean> = this.store.select(AuthSelectors.isNeedOtp);
  phone$: Observable<string> = required(this.store.select(AuthSelectors.phone));

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(AuthActions.loadPassRestrictionsRequest());
  }

  onOtpSend(otp: string): void {
    // console.log('Otp is going to be sent to change password: ', otp);
    this.store.dispatch(AuthActions.changePasswordWithOtpRequest({ confirmCode: otp }));
  }
}
