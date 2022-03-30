import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { UsersActions } from '@store/users/actions';
import { UsersSelectors } from '@store/users/selectors';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent implements OnInit {
  isLoading$: Observable<boolean> = this.store.select(UsersSelectors.isLoading);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(UsersActions.loadUsersRequest());
  }
}
