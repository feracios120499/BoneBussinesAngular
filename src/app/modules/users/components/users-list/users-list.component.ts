import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { User } from '@models/users/user.model';
import { UsersSelectors } from '@store/users/selectors';
import { UsersActions } from '@store/users/actions';
import { UserEditModalComponent } from '../user-edit-modal/user-edit-modal.component';
import { UserCreateModalComponent } from '../user-create-modal/user-create-modal.component';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent implements OnInit {
  isLoading$: Observable<boolean> = this.store.select(
    UsersSelectors.isLoadingUsers
  );
  users$: Observable<User[]> = this.store.select(UsersSelectors.userList);
  filterTerm$: Observable<string> = this.store.select(
    UsersSelectors.filterTerm
  );
  skeletonLength: string[] = this.numberToArray(6);

  constructor(private store: Store, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.store.dispatch(UsersActions.resetUserFilter());
  }

  onUserEdit(user: User): void {
    const modalRef = this.modalService.open(UserEditModalComponent);
    modalRef.componentInstance.editingUser = user;
  }

  onUserAdd(): void {
    this.modalService.open(UserCreateModalComponent);
  }

  private numberToArray(num: number): string[] {
    return new Array(num).toString().split(',');
  }
}
