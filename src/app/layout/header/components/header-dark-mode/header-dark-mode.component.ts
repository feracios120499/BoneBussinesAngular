import { setGlobalLoader } from '@actions/app.actions';
import { setDarkMode } from '@actions/settings.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { darkModeSelector } from '@selectors/settings.selectors';

@Component({
  selector: 'header-dark-mode',
  templateUrl: './header-dark-mode.component.html',
  styleUrls: ['./header-dark-mode.component.scss', './../../header.component.scss']
})
export class HeaderDarkModeComponent implements OnInit {

  constructor(private store: Store) { }

  darkModeIsActive$ = this.store.select(darkModeSelector);
  ngOnInit(): void {
  }

  setDarkMode(isActive: boolean): void {
    this.store.dispatch(setGlobalLoader({ isLoading: true }));
    this.store.dispatch(setDarkMode({ isActive }));
    setTimeout(() => {
      this.store.dispatch(setGlobalLoader({ isLoading: false }));
    }, 200);
  }
}
