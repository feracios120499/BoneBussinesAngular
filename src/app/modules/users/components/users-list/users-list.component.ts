import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { User } from '@models/users/user.model';
import { UsersSelectors } from '@store/users/selectors';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'users-list',
  },
})
export class UsersListComponent {
  users$: Observable<User[]> = this.store.select(UsersSelectors.usersSelector);
  filterTerm$: Observable<string> = this.store.select(
    UsersSelectors.filterTerm
  );
  filterKeys: string[] = ['displayName', 'phoneNumber', 'email'];
  selectedItem?: number;

  constructor(private store: Store) {}

  toDetail(user: User): void {
    console.log('user selected: ', user);
  }
}
