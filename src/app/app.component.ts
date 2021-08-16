import { setGlobalLoader } from '@actions/app.actions';
import { loadResources, setDarkMode } from '@actions/settings.actions';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouteConfigLoadEnd, RouteConfigLoadStart, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { isOpenMenuOrInfoSelector, isOpenMenuSelector } from '@selectors/menu.selectors';
import { currentLanguageSelector, darkModeSelector } from '@selectors/settings.selectors';
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

  language$ = this.store.select(currentLanguageSelector);
  darkMode$ = this.store.select(darkModeSelector);
  isOpenMenu$ = this.store.select(isOpenMenuOrInfoSelector);
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
    //this.store.dispatch(setDarkMode({ isActive: false }));
    this.lngSubscription$ = this.language$.subscribe(language => {
      this.translate.use(language);
    });
    this.darkModeSubscription$ = this.darkMode$.subscribe(darkMode => {
      console.log('dark mode');
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
    this.store.dispatch(loadResources());
  }

  ngOnDestroy(): void {
    this.lngSubscription$.unsubscribe();
    this.darkModeSubscription$.unsubscribe();
    this.routeEventSubscription$.unsubscribe();
  }

  globalLoaderStarter(): void {
    this.routeEventSubscription$ = this.router.events.subscribe(event => {
      if (event instanceof RouteConfigLoadStart) {
        this.store.dispatch(setGlobalLoader({ isLoading: true }));
      } else if (event instanceof RouteConfigLoadEnd) {
        this.store.dispatch(setGlobalLoader({ isLoading: false }));
      }
    });
  }

  rangeSelected(event: any): void {
    console.log(event);
  }
}
