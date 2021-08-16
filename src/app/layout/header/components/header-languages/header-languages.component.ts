import { setLanguage } from '@actions/settings.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { allowedLanguagesSelector, currentLanguageSelector } from '@selectors/settings.selectors';

@Component({
  selector: 'header-languages',
  templateUrl: './header-languages.component.html',
  styleUrls: ['./header-languages.component.scss', './../../header.component.scss']
})
export class HeaderLanguagesComponent implements OnInit {

  constructor(private store: Store) { }

  public currentLanguage$ = this.store.select(currentLanguageSelector);
  public languages$ = this.store.select(allowedLanguagesSelector);
  ngOnInit(): void {
  }

  setLanguage(language: string): void {
    this.store.dispatch(setLanguage({ language }));
  }

}
