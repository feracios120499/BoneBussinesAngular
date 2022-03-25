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

import { BaseFormComponent } from '@forms/base-form.component';
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
  max: 90
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
  extends BaseFormComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  public isLoading$ = this.store.select(AuthSelectors.isLoading);
  public form!: FormGroup;
  public errorMessage = '';
  private unlistenPasswordChange!: () => void;

  constructor(
    store: Store,
    changeDetectorRef: ChangeDetectorRef,
    private renderer: Renderer2
  ) {
    super(store, changeDetectorRef);
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      userName: new FormControl('', [
        required,
        pattern([emailRegExp, phoneRegExp])
      ]),
      password: new FormControl('', [
        required,
        minLength(PASSWORD_LENGTH.min),
        maxLength(PASSWORD_LENGTH.max)
      ]),
    });
    super.ngOnInit();
  }

  ngAfterViewInit(): void {
    const passwordInput = document.getElementById(
      'password'
    )! as HTMLInputElement;
    this.unlistenPasswordChange = this.renderer.listen(
      passwordInput,
      'change',
      (event: Event) => {
        this.form.setValue({
          userName: this.form.value.userName,
          password: (event.target as HTMLInputElement).value,
        });
      }
    );
  }

  onLogin(): void {
    this.store.dispatch(AuthActions.resetLogin());
    const model = this.form.value as LoginModel;
    this.submit(AuthActions.loginRequest({ ...model }), AuthSelectors.error);
  }

  ngOnDestroy(): void {
    this.unlistenPasswordChange();
  }
}
