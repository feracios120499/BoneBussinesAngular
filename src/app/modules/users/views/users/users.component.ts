import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { UsersActions } from '@store/users/actions';
import { UsersSelectors } from '@store/users/selectors';
import { User } from '@models/users/user.model';
import { UserCreateModalComponent } from '@modules/users/components/user-create-modal/user-create-modal.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent implements OnInit {
  users$: Observable<User[]> = this.store.select(UsersSelectors.userList);
  isLoading$: Observable<boolean> = this.store.select(
    UsersSelectors.isLoadingUsers
  );

  constructor(private store: Store, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.store.dispatch(UsersActions.loadUsersRequest());
  }

  onUserAdd(): void {
    this.modalService.open(UserCreateModalComponent);
  }
}
