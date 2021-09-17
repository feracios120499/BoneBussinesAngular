import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginModel } from '@modules/auth/models/login.model';
import { Store } from '@ngrx/store';
import { AuthActions } from '@store/auth/actions';
import { AuthSelectors } from '@store/auth/selectors';
import { Subscription } from 'rxjs';


@Component({
  selector: 'auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.scss', './../../views/auth/auth.component.scss']
})
export class AuthLoginComponent implements AfterViewInit, OnDestroy {

  public loading$ = this.store.select(AuthSelectors.isLoading);
  public error$ = this.store.select(AuthSelectors.error);

  public formGroup: FormGroup;
  private loadingSubscription: Subscription;
  constructor(private store: Store) {

    this.formGroup = new FormGroup({
      userName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });

    this.loadingSubscription = this.loading$.subscribe((isLoading) => {
      if (isLoading) {
        this.formGroup.disable();
      }
      else {
        this.formGroup.enable();
      }
    });
  }
  ngAfterViewInit(): void {
    const inputPassword = document.getElementById('password') as any;
    inputPassword.addEventListener('change', (event: any) => {
      this.formGroup.setValue({ userName: this.formGroup.value.userName, password: event.target.value });
    });
  }

  onLogin(): void {
    this.store.dispatch(AuthActions.resetLogin());
    const model = this.formGroup.value as LoginModel;
    this.store.dispatch(AuthActions.loginRequest({ ...model }));
  }
  ngOnDestroy(): void {
    this.loadingSubscription?.unsubscribe();
  }


}
