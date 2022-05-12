import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouteConfigLoadEnd, RouteConfigLoadStart, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { ResizeService } from '@services/resize.service';
import { AppActions } from '@store/app/actions';
import { MenuSelectors } from '@store/menu/selectors';
import { SettingsSelectors } from '@store/settings/selectors';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(
    private translate: TranslateService,
    private store: Store,
    private router: Router,
    private resizeService: ResizeService
  ) {}
  title = 'BOneBussinesAngular';

  language$ = this.store.select(SettingsSelectors.currentLanguage);
  darkMode$ = this.store.select(SettingsSelectors.darkMode);
  isOpenMenu$ = this.store.select(MenuSelectors.isOpenMenuOrInfo);
  private lngSubscription$!: Subscription;
  private routeEventSubscription$!: Subscription;
  private openMenuSubscription$!: Subscription;

  ngOnInit(): void {
    this.globalLoaderStarter();
    this.store.dispatch(AppActions.start());
    // this.store.dispatch(setDarkMode({ isActive: false }));
    this.lngSubscription$ = this.language$.subscribe((language) => {
      this.translate.use(language);
    });
    this.openMenuSubscription$ = this.isOpenMenu$.subscribe((isOpen) => {
      if (isOpen) {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        document.body.classList.add('menu-open');
      } else {
        document.body.classList.remove('menu-open');
      }
    });
  }

  ngOnDestroy(): void {
    this.lngSubscription$.unsubscribe();
    this.routeEventSubscription$.unsubscribe();
  }

  globalLoaderStarter(): void {
    this.routeEventSubscription$ = this.router.events.subscribe((event) => {
      if (event instanceof RouteConfigLoadStart) {
        this.store.dispatch(AppActions.setGlobalLoader({ isLoading: true }));
      } else if (event instanceof RouteConfigLoadEnd) {
        this.store.dispatch(AppActions.setGlobalLoader({ isLoading: false }));
      }
    });
  }
}
