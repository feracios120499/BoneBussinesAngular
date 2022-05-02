import { Component, OnInit } from '@angular/core';
import { AuthActions } from '@modules/auth/store/actions';
import { Store } from '@ngrx/store';
import { AppActions } from '@store/app/actions';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(AuthActions.resetLogin());
    this.store.dispatch(AppActions.disableDemoMode());
  }

  activateDemo(): void {
    this.store.dispatch(AppActions.activateDemo());
  }
}
