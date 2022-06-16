import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  Renderer2,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { BaseFormComponent } from '@form-controls/base-form.component';
import { LoginModel } from '@modules/auth/models/login.model';
import { ModelControl } from '@b1-types/model-controls.type';
import { LoginForm } from '../../models/login-form.model';
import { pattern } from '@validators/pattern.validator';
import { emailRegExp } from '@validators/email.validator';
import { phoneRegExp } from '@validators/phone.validator';
import { AuthSelectors } from '@modules/auth/store/selectors';
import { AuthActions } from '@modules/auth/store/actions';

const { required, minLength, maxLength } = Validators;
const PASSWORD_LENGTH: Readonly<{ [key: string]: number }> = {
  min: 3,
  max: 90,
};

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  // styleUrls: ['./auth-login.component.scss', './../../views/auth/auth.component.scss'],
  styleUrls: ['./auth-login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthLoginComponent extends BaseFormComponent implements OnInit, AfterViewInit, OnDestroy {
  isLoading$ = this.store.select(AuthSelectors.isLoading);
  form!: FormGroup;
  userNameControl = new FormControl('', [required, pattern([emailRegExp, phoneRegExp])]);
  passwordControl = new FormControl('', [required, minLength(PASSWORD_LENGTH.min), maxLength(PASSWORD_LENGTH.max)]);
  errorMessage = '';
  private unlistenPasswordChange!: () => void;

  constructor(store: Store, changeDetectorRef: ChangeDetectorRef, private renderer: Renderer2) {
    super(store, changeDetectorRef);
  }

  ngOnInit(): void {
    const controls: ModelControl<LoginForm> = {
      userName: this.userNameControl,
      password: this.passwordControl,
    };
    this.form = new FormGroup(controls);
  }

  ngAfterViewInit(): void {
    super.ngAfterViewInit();
    const passwordInput = document.getElementById('password')! as HTMLInputElement;
    this.unlistenPasswordChange = this.renderer.listen(passwordInput, 'change', (event: Event) => {
      this.form.setValue({
        userName: this.form.value.userName,
        password: (event.target as HTMLInputElement).value,
      });
    });
  }

  onLogin(): void {
    this.store.dispatch(AuthActions.resetLogin());
    let { userName, password } = this.form.value as LoginModel;
    if (this.checkIsPhone(userName)) {
      userName = this.mapPhone(userName);
    }
    // console.log('login model: ', { userName, password });
    this.submit(AuthActions.loginRequest({ userName, password }), AuthSelectors.error);
  }

  ngOnDestroy(): void {
    this.unlistenPasswordChange();
  }

  private checkIsPhone(value: string): boolean {
    return !value.includes('@') && 10 <= value.length && value.length <= 12;
  }

  private mapPhone(phone: string): string {
    if (phone.includes('+')) return phone;

    switch (phone.length) {
      case 10:
        return '+38' + phone;
      case 11:
        return '+3' + phone;
      case 12:
        return '+' + phone;
      default:
        return phone;
    }
  }
}
