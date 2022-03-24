import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { withDestroy } from '@mixins/with-destroy.mixin';
import { BaseFormComponent } from 'src/app/@shared/modules/b1-forms/components/base-form.component';
import { AuthActions } from '@store/auth/actions';
import { AuthSelectors } from '@store/auth/selectors';
import { LoginModel } from '@modules/auth/models/login.model';
import {
  emailRegExp,
  pattern,
  phoneRegExp,
} from '@validators/pattern.validator';

const { required, minLength, maxLength } = Validators;
const PASSWORD_LENGTH: Readonly<{ [key: string]: number }> = {
  min: 3,
  max: 90,
};

@Component({
  selector: 'auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: [
    './auth-login.component.scss',
    './../../views/auth/auth.component.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthLoginComponent
  extends withDestroy(BaseFormComponent)
  implements OnInit, AfterViewInit
{
  public isLoading$ = this.store.select(AuthSelectors.isLoading);
  public formGroup!: FormGroup;
  public errorMessage = '';

  constructor(store: Store, changeDetectorRef: ChangeDetectorRef) {
    super(store, changeDetectorRef);
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      userName: new FormControl('', [
        required,
        pattern([emailRegExp, phoneRegExp]),
      ]),
      password: new FormControl('', [
        required,
        minLength(PASSWORD_LENGTH.min),
        maxLength(PASSWORD_LENGTH.max),
      ]),
    });
  }

  ngAfterViewInit(): void {
    const inputPassword = document.getElementById('password') as any;
    inputPassword.addEventListener('change', (event: any) => {
      this.formGroup.setValue({
        userName: this.formGroup.value.userName,
        password: event.target.value,
      });
    });
  }

  onLogin(): void {
    this.store.dispatch(AuthActions.resetLogin());
    const model = this.formGroup.value as LoginModel;
    this.submit(AuthActions.loginRequest({ ...model }), AuthSelectors.error);
  }
}
