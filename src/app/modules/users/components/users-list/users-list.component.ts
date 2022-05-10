import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { UsersSelectors } from '@modules/users/store/selectors';
import { User } from '@modules/users/models/user.model';
import { UsersActions } from '@modules/users/store/actions';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent implements OnInit {
  isLoading$: Observable<boolean> = this.store.select(UsersSelectors.isInitialLoadingUsers);
  users$: Observable<User[]> = this.store.select(UsersSelectors.userList);
  filterTerm$: Observable<string> = this.store.select(UsersSelectors.filterTerm);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(UsersActions.resetUserFilter());
  }

  onUserEdit(user: User): void {
    this.store.dispatch(UsersActions.showUserEditModal({ editingUser: user }));
  }

  onUserAdd(): void {
    this.store.dispatch(UsersActions.showUserCreateModal());
  }
}
