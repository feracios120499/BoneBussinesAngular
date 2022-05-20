import { Component, OnInit } from '@angular/core';
import { filter, take } from 'rxjs/operators';
import { AuthActions } from '@modules/auth/store/actions';
import { Store } from '@ngrx/store';
import { AppActions } from '@store/app/actions';
import { AppSelectors } from '@store/app/selectors';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
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
}
