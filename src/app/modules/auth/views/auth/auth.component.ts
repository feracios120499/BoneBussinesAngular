import { Component, OnInit } from '@angular/core';
import { AuthActions } from '@store/auth/actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(AuthActions.resetLogin());
  }

}
