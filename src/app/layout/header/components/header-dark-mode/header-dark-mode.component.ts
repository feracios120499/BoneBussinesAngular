import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppActions } from '@store/app/actions';
import { SettingsActions } from '@store/settings/actions';
import { SettingsSelectors } from '@store/settings/selectors';

@Component({
  selector: 'header-dark-mode',
  templateUrl: './header-dark-mode.component.html',
  styleUrls: ['./header-dark-mode.component.scss', './../../header.component.scss']
})
export class HeaderDarkModeComponent implements OnInit {

  constructor(private store: Store) { }

  darkModeIsActive$ = this.store.select(SettingsSelectors.darkMode);
  ngOnInit(): void {
  }

  setDarkMode(isActive: boolean): void {
    this.store.dispatch(AppActions.setGlobalLoader({ isLoading: true }));
    this.store.dispatch(SettingsActions.setDarkMode({ isActive }));
    setTimeout(() => {
      this.store.dispatch(AppActions.setGlobalLoader({ isLoading: false }));
    }, 200);
  }
}
