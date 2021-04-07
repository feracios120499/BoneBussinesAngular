import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LogInModel } from './../../models/login.model';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { login, resetLogin } from 'src/app/reducers/auth';
import { AuthFacade } from 'src/app/@core/facades/auth.facade';

@Component({
  selector: 'auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.scss']
})
export class AuthLoginComponent implements OnInit {

  public loading$ = this.facade.isLoading$;
  constructor(private store: Store, private facade: AuthFacade) { }
  login = new LogInModel();

  loginControl = new FormControl('', Validators.required);
  passwordControl = new FormControl('', Validators.required);
  ngOnInit(): void {
  }

  onLogin(): void {
    this.store.dispatch(login({ model: { ...this.login } }));
    this.store.dispatch(resetLogin());
  }

}
