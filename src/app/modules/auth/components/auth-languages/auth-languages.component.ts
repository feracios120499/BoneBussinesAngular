import { setLanguage } from '@actions/settings.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { allowedLanguagesSelector, currentLanguageSelector } from '@selectors/settings.selectors';

@Component({
  selector: 'app-auth-languages',
  templateUrl: './auth-languages.component.html',
  styleUrls: ['./auth-languages.component.scss']
})
export class AuthLanguagesComponent implements OnInit {

  language$ = this.store.select(currentLanguageSelector);
  languages$ = this.store.select(allowedLanguagesSelector);

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  setLanguage(language: string): void {
    this.store.dispatch(setLanguage({ language }));
  }

}
