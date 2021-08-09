import { setGlobalLoader } from '@actions/app.actions';
import { logout } from '@actions/auth.actions';
import { closeMenu, openInfo, openMenu } from '@actions/menu.actions';
import { setDarkMode, setLanguage } from '@actions/settings.actions';
import { Component, OnInit } from '@angular/core';
import { UserFacade } from '@core/facades/user.facade';
import { Store } from '@ngrx/store';
import { isCollapsedSelector, isOpenInfoSelector, isOpenMenuOrInfoSelector } from '@selectors/menu.selectors';
import { allowedLanguagesSelector, currentLanguageSelector, darkModeSelector, logoSelector } from '@selectors/settings.selectors';
import { countNotificationsSelector, userEmailSelector, userNameSelector, userPhoneSelector, userPictureSelector } from '@selectors/user.selectors';
import { environment } from 'src/environments/environment';

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
  public userEmail$ = this.store.select(userEmailSelector);
  public userPhone$ = this.store.select(userPhoneSelector);;
  public logo$ = this.store.select(logoSelector);
  public isCollapsed$ = this.store.select(isCollapsedSelector);
  public isOpen$ = this.store.select(isOpenMenuOrInfoSelector);
  public isOpenInfo$ = this.store.select(isOpenInfoSelector);
  public defaultPictureUrl = environment.defaultUserPictureUrl;
  ngOnInit(): void {
    // this.disableDarkMode();
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

  openMenu(): void {
    this.store.dispatch(openMenu());
  }

  openInfo(): void {
    this.store.dispatch(openInfo());
  }

  closeMenu(): void {
    this.store.dispatch(closeMenu());
  }

  private setDarkModeState(isActive: boolean): void {
    this.store.dispatch(setGlobalLoader({ isLoading: true }));
    this.store.dispatch(setDarkMode({ isActive }));
    setTimeout(() => {
      this.store.dispatch(setGlobalLoader({ isLoading: false }));
    }, 200);
  }

  handleError(event: any): void {
    event.target.src = this.defaultPictureUrl;
  }

  logout(): void {
    this.store.dispatch(logout());
  }


}
