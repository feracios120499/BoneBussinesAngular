import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { UsersSelectors } from './store/selectors';
import { UsersActions } from './store/actions';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent implements OnInit {
  isLoading$: Observable<boolean> = this.store.select(UsersSelectors.isLoadingUsers);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(UsersActions.loadUsersRequest());
    this.store.dispatch(UsersActions.loadRolesRequest());
  }
}
