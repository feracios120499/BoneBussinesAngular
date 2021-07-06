import { setGlobalLoader } from '@actions/app.actions';
import { setDarkMode, setLanguage } from '@actions/settings.actions';
import { Component, OnInit } from '@angular/core';
import { UserFacade } from '@core/facades/user.facade';
import { Store } from '@ngrx/store';
import { allowedLanguagesSelector, currentLanguageSelector, darkModeSelector } from '@selectors/settings.selectors';
import { countNotificationsSelector, userNameSelector, userPictureSelector } from '@selectors/user.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  constructor(private userFacade: UserFacade, private store: Store) { }

  public countCustomers$ = this.userFacade.countCustomers$;
  public language$ = this.store.select(currentLanguageSelector);
  public languages$ = this.store.select(allowedLanguagesSelector);
  public darkMode$ = this.store.select(darkModeSelector);
  public countNotifications$ = this.store.select(countNotificationsSelector);
  public userName$ = this.store.select(userNameSelector);
  public userPictureUrl$ = this.store.select(userPictureSelector);

  ngOnInit(): void {
  }

  setLanguage(language: string): void {
    this.store.dispatch(setLanguage({ language }));
  }

  setDarkMode(): void {
    this.setDarkModeState(true);
  }

  disableDarkMode(): void {
    this.setDarkModeState(false);
  }

  private setDarkModeState(isActive: boolean): void {
    this.store.dispatch(setGlobalLoader({ isLoading: true }));
    this.store.dispatch(setDarkMode({ isActive }));
    setTimeout(() => {
      this.store.dispatch(setGlobalLoader({ isLoading: false }));
    }, 200);
  }
}
