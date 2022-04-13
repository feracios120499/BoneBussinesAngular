import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { UsersActions } from '@store/users/actions';
import { UsersSelectors } from '@store/users/selectors';
import { UserCreateModalComponent } from '../user-create-modal/user-create-modal.component';

@Component({
  selector: 'app-users-actions',
  templateUrl: './users-actions.component.html',
  styleUrls: ['./users-actions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersActionsComponent {
  isLoading$: Observable<boolean> = this.store.select(
    UsersSelectors.isLoadingUsersOrRoles
  );
  filterTerm$: Observable<string> = this.store.select(
    UsersSelectors.filterTerm
  );

  constructor(private store: Store, private modalService: NgbModal) {}

  onUserAdd(): void {
    this.modalService.open(UserCreateModalComponent);
  }

  onUsersFilter(term: string): void {
    this.store.dispatch(UsersActions.filterUsers({ term }));
  }
}
