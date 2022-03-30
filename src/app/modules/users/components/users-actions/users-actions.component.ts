import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UsersActions } from '@store/users/actions';
import { UsersSelectors } from '@store/users/selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users-actions',
  templateUrl: './users-actions.component.html',
  styleUrls: ['./users-actions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersActionsComponent implements OnInit {
  filterTerm$: Observable<string> = this.store.select(
    UsersSelectors.filterTerm
  );

  constructor(private store: Store) {}

  ngOnInit(): void {}

  onUserAdd(): void {
    console.log('User add clicked!');
  }

  onUsersFilter(term: string): void {
    this.store.dispatch(UsersActions.filterUsers({ term }));
  }
}
