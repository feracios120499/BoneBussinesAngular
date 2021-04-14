import { loginRequest, resetLogin } from '@actions/auth.actions';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AuthFacade } from 'src/app/@core/facades/auth.facade';

import { LogInModel } from './../../models/login.model';

@Component({
  selector: 'auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.scss']
})
export class AuthLoginComponent implements OnInit {

  public loading$ = this.facade.isLoading$;
  public error$ = this.facade.errorMessage$;

  constructor(private store: Store, private facade: AuthFacade) { }

  login = new LogInModel();

  loginControl = new FormControl('', Validators.required);
  passwordControl = new FormControl('', Validators.required);

  ngOnInit(): void {
  }

  onLogin(): void {
    this.store.dispatch(resetLogin());
    this.store.dispatch(loginRequest({ data: { ...this.login } }));
  }

}
