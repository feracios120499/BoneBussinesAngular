import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouteConfigLoadEnd, RouteConfigLoadStart, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { AppActions } from '@store/app/actions';
import { MenuSelectors } from '@store/menu/selectors';
import { SettingsActions } from '@store/settings/actions';
import { SettingsSelectors } from '@store/settings/selectors';
import dayjs from 'dayjs';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  constructor(private translate: TranslateService, private store: Store, private router: Router) {
  }
  title = 'BOneBussinesAngular';

  language$ = this.store.select(SettingsSelectors.currentLanguage);
  darkMode$ = this.store.select(SettingsSelectors.darkMode);
  isOpenMenu$ = this.store.select(MenuSelectors.isOpenMenuOrInfo);
  private lngSubscription$!: Subscription;
  private darkModeSubscription$!: Subscription;
  private routeEventSubscription$!: Subscription;
  private openMenuSubscription$!: Subscription;
  public selected: any;
  ranges: any = {
    'shared.picker.today': [dayjs(), dayjs()],
    Yesterday: [dayjs().add(1, 'days'), dayjs().subtract(1, 'days')],
    'Last 7 Days': [dayjs().subtract(7, 'days'), dayjs()],
    'Last 30 Days': [dayjs().subtract(30, 'days'), dayjs()],
    'This Month': [dayjs().startOf('month'), dayjs().endOf('month')]
  };

  ngOnInit(): void {
    document.documentElement.style.setProperty('--app-height', `${window.innerHeight}px`);
    this.globalLoaderStarter();
    // this.store.dispatch(setDarkMode({ isActive: false }));
    this.lngSubscription$ = this.language$.subscribe(language => {
      this.translate.use(language);
    });
    this.darkModeSubscription$ = this.darkMode$.subscribe(darkMode => {
      if (darkMode) {
        document.body.classList.add('dark-mode');
      }
      else {
        document.body.classList.remove('dark-mode');
      }

    });
    this.openMenuSubscription$ = this.isOpenMenu$.subscribe(isOpen => {
      if (isOpen) {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        document.body.classList.add('menu-open');
      }
      else {
        document.body.classList.remove('menu-open');
      }
    });
    this.store.dispatch(SettingsActions.loadResources());
  }

  ngOnDestroy(): void {
    this.lngSubscription$.unsubscribe();
    this.darkModeSubscription$.unsubscribe();
    this.routeEventSubscription$.unsubscribe();
  }

  globalLoaderStarter(): void {
    this.routeEventSubscription$ = this.router.events.subscribe(event => {
      if (event instanceof RouteConfigLoadStart) {
        this.store.dispatch(AppActions.setGlobalLoader({ isLoading: true }));
      } else if (event instanceof RouteConfigLoadEnd) {
        this.store.dispatch(AppActions.setGlobalLoader({ isLoading: false }));
      }
    });
  }
}
