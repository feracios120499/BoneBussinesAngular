import { currentLanguageSelector } from './reducers/settings';
import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BOneBussinesAngular';

  language$ = this.store.pipe<string>(select(currentLanguageSelector));

  constructor(private translate: TranslateService, private store: Store) {
  }

  ngOnInit(): void {
    this.language$.subscribe((language) => {
      this.translate.use(language);
    })
  }
}
