import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { BaseFormComponent } from '@form-controls/base-form.component';
import { AuthSelectors } from '@modules/auth/store/selectors';
import { ModelControl } from '@b1-types/model-controls.type';
import { RestorePasswordForm } from '../../models/restore-password-form.model';
import { AuthActions } from '@modules/auth/store/actions';
import { RestorePasswordModel } from '@modules/auth/models/restore-password.model';

const { required } = Validators;

@Component({
  selector: 'app-auth-restore-password-form',
  templateUrl: './auth-restore-password-form.component.html',
  styleUrls: ['./auth-restore-password-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthRestorePasswordFormComponent extends BaseFormComponent implements OnInit {
  isLoading$ = this.store.select(AuthSelectors.isLoading);
  form!: FormGroup;
  phonePrefix = '+38';
  phoneControl = new FormControl('', [required]);
  errorMessage = '';

  ngOnInit(): void {
    const controls: ModelControl<RestorePasswordForm> = {
      phoneNumber: this.phoneControl,
    };
    this.form = new FormGroup(controls);
  }

  onSubmit(): void {
    const { phoneNumber } = this.form.value as RestorePasswordForm;
    const model: RestorePasswordModel = { phone: this.phonePrefix + phoneNumber };
    this.submit(AuthActions.restorePasswordRequest(model), AuthSelectors.error);
  }
}
