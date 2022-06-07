import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, take } from 'rxjs/operators';
import { AuthActions } from '@modules/auth/store/actions';
import { Store } from '@ngrx/store';
import { AppActions } from '@store/app/actions';
import { AppSelectors } from '@store/app/selectors';
import { PublicSelectors } from '@store/public/selectors';
import { PublicActions } from '@store/public/actions';
import { required } from '@store/shared';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  copyright$: Observable<string> = required(this.store.select(PublicSelectors.copyright));
  currentVersion$: Observable<string> = required(this.store.select(PublicSelectors.currentVersion));

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(AuthActions.resetLogin());
    this.store
      .select(AppSelectors.isDemo)
      .pipe(
        take(1),
        filter((isDemo: boolean) => isDemo)
      )
      .subscribe(() => {
        this.store.dispatch(AppActions.disableDemoMode());
      });
  }

  activateDemo(): void {
    this.store.dispatch(AppActions.activateDemo());
  }

  onFeedbackFormOpen(): void {
    this.store.dispatch(PublicActions.showFeedbackForm());
  }
}
