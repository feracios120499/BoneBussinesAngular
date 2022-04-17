import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { User } from '@models/users/user.model';
import { UsersSelectors } from '@store/users/selectors';
import { UserEditModalComponent } from '../user-edit-modal/user-edit-modal.component';

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
  users$: Observable<User[]> = this.store.select(UsersSelectors.userList);
  filterTerm$: Observable<string> = this.store.select(
    UsersSelectors.filterTerm
  );

  constructor(private store: Store, private modalService: NgbModal) {}

  onUserEdit(user: User): void {
    const modalRef = this.modalService.open(UserEditModalComponent);
    modalRef.componentInstance.editingUser = user;
  }
}
