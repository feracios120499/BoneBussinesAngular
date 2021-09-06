import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SettingsActions } from '@store/settings/actions';
import { SettingsSelectors } from '@store/settings/selectors';

@Component({
  selector: 'header-languages',
  templateUrl: './header-languages.component.html',
  styleUrls: ['./header-languages.component.scss', './../../header.component.scss']
})
export class HeaderLanguagesComponent implements OnInit {

  constructor(private store: Store) { }

  public currentLanguage$ = this.store.select(SettingsSelectors.currentLanguage);
  public languages$ = this.store.select(SettingsSelectors.allowedLanguages);
  ngOnInit(): void {
  }

  setLanguage(language: string): void {
    this.store.dispatch(SettingsActions.setLanguage({ language }));
  }

}
