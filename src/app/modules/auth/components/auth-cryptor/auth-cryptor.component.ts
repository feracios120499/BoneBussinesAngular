import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CryptorKey } from '@services/sign/models/cryptor-key.model';
import { CryptorToken } from '@services/sign/models/cryptor-token.model';
import { AuthActions } from '@store/auth/actions';
import { AuthSelectors } from '@store/auth/selectors';

@Component({
  selector: 'auth-cryptor',
  templateUrl: './auth-cryptor.component.html',
  styleUrls: ['./auth-cryptor.component.scss']
})
export class AuthCryptorComponent implements OnInit {
  constructor(private store: Store) {
    this.key$.subscribe(key => this.key = key);
    this.token$.subscribe(token => this.token = token);
  }
  key?: CryptorKey;
  token?: CryptorToken;
  tokens$ = this.store.select(AuthSelectors.cryptorTokens);
  keys$ = this.store.select(AuthSelectors.cryptorKeys);

  token$ = this.store.select(AuthSelectors.cryptorToken);
  key$ = this.store.select(AuthSelectors.cryptorKey);

  ngOnInit(): void {
    this.store.dispatch(AuthActions.loadCryptorTokens());
  }

  tokenChange(token: CryptorToken): void {
    this.store.dispatch(AuthActions.setCryptorToken({ token }));
  }

  keyChange(key: CryptorKey): void {
    this.store.dispatch(AuthActions.setCryptorKey({ key }));
  }

  onLogin(): void {
    if (this.key && this.token) {
      this.store.dispatch(AuthActions.loginCryptor({ key: this.key, token: this.token }));
    }
  }
}
