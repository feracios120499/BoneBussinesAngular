
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SettingsActions } from '@store/settings/actions';
import { SettingsSelectors } from '@store/settings/selectors';


@Component({
  selector: 'app-auth-languages',
  templateUrl: './auth-languages.component.html',
  styleUrls: ['./auth-languages.component.scss']
})
export class AuthLanguagesComponent implements OnInit {

  language$ = this.store.select(SettingsSelectors.currentLanguage);
  languages$ = this.store.select(SettingsSelectors.allowedLanguages);

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  setLanguage(language: string): void {
    this.store.dispatch(SettingsActions.setLanguage({ language }));
  }

}
