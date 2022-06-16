import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { BaseFormComponent } from '@form-controls/base-form.component';
import { required } from '@store/shared';
import { AuthSelectors } from '../../store/selectors';
import { AuthActions } from '../../store/actions';
import { PasswordRestrictions } from '../../models/password-restrictions.model';
import { ModelControl } from '@b1-types/model-controls.type';
import { ChangePasswordForm } from '../../models/change-password-form.model';
import { sameAs } from '@validators/same-as.validator';
import { minUppercaseCount } from '@validators/min-uppercase-count.validator';
import { minLowercaseCount } from '@validators/min-lowercase-count.validator';
import { minDigitsCount } from '@validators/min-digits-count.validator';
import { minSpecCharsCount } from '@validators/min-spec-chars-count.validator';
import { ChangePasswordModel } from '@modules/auth/models/change-password.model';

@Component({
  selector: 'app-auth-change-password-form',
  templateUrl: './auth-change-password-form.component.html',
  styleUrls: ['./auth-change-password-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthChangePasswordFormComponent extends BaseFormComponent implements OnInit {
  isLoading$: Observable<boolean> = this.store.select(AuthSelectors.isLoading);
  form!: FormGroup;
  errorMessage = '';
  phonePrefix = '+38';
  phoneControl = new FormControl('', [Validators.required]);
  currentPasswordControl = new FormControl('', [Validators.required]);
  newPasswordControl = new FormControl('', [Validators.required]);
  confirmNewPasswordControl = new FormControl('', [Validators.required, sameAs(this.newPasswordControl)]);

  ngOnInit(): void {
    this.initForm();
    this.store
      .select(AuthSelectors.techPassword)
      .pipe(required, take(1))
      .subscribe((password) => {
        this.currentPasswordControl.setValue(password);
      });
    this.store
      .select(AuthSelectors.passRestrictions)
      .pipe(required, take(1))
      .subscribe((restrictions: PasswordRestrictions) => {
        this.addNewPasswordValidators(restrictions);
      });
  }

  onSubmit(): void {
    const { phone, ...rest } = this.form.value as ChangePasswordForm;
    const model: ChangePasswordModel = { mode: 'phone', userName: this.phonePrefix + phone, ...rest };
    console.log('change password model: ', model);
    this.submit(AuthActions.changePasswordRequest(model), AuthSelectors.error);
  }

  private initForm(): void {
    const controls: ModelControl<ChangePasswordForm> = {
      phone: this.phoneControl,
      currentPassword: this.currentPasswordControl,
      newPassword: this.newPasswordControl,
      confirmNewPassword: this.confirmNewPasswordControl,
    };
    this.form = new FormGroup(controls);
  }

  private addNewPasswordValidators(restrictions: PasswordRestrictions): void {
    const { minPassLength, uppercaseCount, lowercaseCount, digitsCount, specCharsCount } = restrictions;
    this.newPasswordControl.addValidators([
      Validators.minLength(minPassLength),
      minUppercaseCount(uppercaseCount),
      minLowercaseCount(lowercaseCount),
      minDigitsCount(digitsCount),
      minSpecCharsCount(specCharsCount),
    ]);
    this.newPasswordControl.updateValueAndValidity();
  }
}
