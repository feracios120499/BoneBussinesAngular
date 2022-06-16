import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { AuthActions } from '@modules/auth/store/actions';
import { AuthSelectors } from '@modules/auth/store/selectors';
import { required } from '@store/shared';

@Component({
  selector: 'app-auth-restore-password',
  templateUrl: './auth-restore-password.component.html',
  styleUrls: ['./auth-restore-password.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthRestorePasswordComponent {
  isNeedOtp$: Observable<boolean> = this.store.select(AuthSelectors.isNeedOtp);
  phone$: Observable<string> = required(this.store.select(AuthSelectors.phone));

  constructor(private store: Store) {}

  onOtpSend(otp: string): void {
    this.store.dispatch(AuthActions.restorePasswordWithOtpRequest({ confirmCode: otp }));
  }
}
