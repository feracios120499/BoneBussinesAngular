import { currentLanguageSelector, allowedLanguagesSelector, setLanguage } from './../../../../reducers/settings';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';

@Component({
  selector: 'app-auth-languages',
  templateUrl: './auth-languages.component.html',
  styleUrls: ['./auth-languages.component.scss']
})
export class AuthLanguagesComponent implements OnInit {

  language$ = this.store.pipe<string>(select(currentLanguageSelector));
  languages$ = this.store.pipe<string[]>(select(allowedLanguagesSelector));

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  setLanguage(language: string): void {
    this.store.dispatch(setLanguage({ language }));
  }

}
