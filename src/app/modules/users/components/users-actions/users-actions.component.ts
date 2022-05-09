import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { UsersSelectors } from '@modules/users/store/selectors';
import { User } from '@modules/users/models/user.model';
import { UsersActions } from '@modules/users/store/actions';

@Component({
  selector: 'app-users-actions',
  templateUrl: './users-actions.component.html',
  styleUrls: ['./users-actions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersActionsComponent {
  users$: Observable<User[]> = this.store.select(UsersSelectors.userList);
  isLoading$: Observable<boolean> = this.store.select(UsersSelectors.isLoading);
  filterTerm$: Observable<string> = this.store.select(UsersSelectors.filterTerm);

  constructor(private store: Store) {}

  onUserAdd(): void {
    this.store.dispatch(UsersActions.showUserCreateModal());
  }

  onUsersFilter(term: string): void {
    this.store.dispatch(UsersActions.filterUsers({ term }));
  }
}
