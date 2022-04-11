import {
  Component,
  ChangeDetectionStrategy,
  Input,
  OnInit,
} from '@angular/core';
import { Store } from '@ngrx/store';

import { UsersSelectors } from '@store/users/selectors';
import { UsersActions } from '@store/users/actions';
import { UserEditStep } from '@models/users/user-edit-step.enum';
import { User } from '@models/users/user.model';

@Component({
  selector: 'app-user-edit-modal',
  templateUrl: './user-edit-modal.component.html',
  styleUrls: ['./user-edit-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserEditModalComponent implements OnInit {
  @Input() editingUser?: User;

  currentEditStep$ = this.store.select(UsersSelectors.currentEditStep);
  editStep = UserEditStep;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(UsersActions.resetUserEdition());
  }
}
