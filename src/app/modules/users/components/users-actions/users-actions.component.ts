import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { UsersActions } from '@store/users/actions';
import { UsersSelectors } from '@store/users/selectors';
import { UserEditModalComponent } from '../user-edit-modal/user-edit-modal.component';

@Component({
  selector: 'app-users-actions',
  templateUrl: './users-actions.component.html',
  styleUrls: ['./users-actions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersActionsComponent {
  isLoadingRoles$: Observable<boolean> = this.store.select(
    UsersSelectors.isLoadingRoles
  );
  filterTerm$: Observable<string> = this.store.select(
    UsersSelectors.filterTerm
  );

  constructor(private store: Store, private modalService: NgbModal) {}

  onUserAdd(): void {
    // console.log('User add clicked!');
    this.modalService.open(UserEditModalComponent);
  }

  onUsersFilter(term: string): void {
    this.store.dispatch(UsersActions.filterUsers({ term }));
  }
}
