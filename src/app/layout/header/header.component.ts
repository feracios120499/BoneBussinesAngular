import { setGlobalLoader } from '@actions/app.actions';
import { logout } from '@actions/auth.actions';
import { closeMenu, openInfo, openMenu } from '@actions/menu.actions';
import { setDarkMode, setLanguage } from '@actions/settings.actions';
import { Component, OnInit } from '@angular/core';
import { UserFacade } from '@core/facades/user.facade';
import { Store } from '@ngrx/store';
import { isMobileSelector } from '@selectors/app.selectors';
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
  public logo$ = this.store.select(logoSelector);
  public isCollapsed$ = this.store.select(isCollapsedSelector);
  public isOpen$ = this.store.select(isOpenMenuOrInfoSelector);
  public isOpenInfo$ = this.store.select(isOpenInfoSelector);
  public isMobile$ = this.store.select(isMobileSelector);
  ngOnInit(): void {
    // this.disableDarkMode()
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



}
