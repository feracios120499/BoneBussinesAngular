import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { currentLanguageSelector } from '@selectors/settings.selectors';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'BOneBussinesAngular';

  language$ = this.store.select(currentLanguageSelector);

  private lngSubscription$!: Subscription;

  constructor(private translate: TranslateService, private store: Store) {
  }

  ngOnInit(): void {
    this.lngSubscription$ = this.language$.subscribe(language => {
      this.translate.use(language);
    });
  }

  ngOnDestroy(): void {
    this.lngSubscription$.unsubscribe();
  }

}
