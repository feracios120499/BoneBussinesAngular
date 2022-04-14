import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

import { Store } from '@ngrx/store';
import { UsersActions } from '@store/users/actions';
import { SharedActions } from '@store/shared/actions';
import { withRequiredPropsCheck } from '@mixins/with-required-props-check.mixin';
import { User } from '@models/users/user.model';
import { ActionButton } from '@ui/b1-dropdown/b1-dropdown.component';
import { TranslateService } from '@ngx-translate/core';

type UserState = 'locked' | 'unlocked';

const USER_STATE_OPTIONS: {
  [key in UserState]: { icon: string; text: string };
} = {
  locked: {
    icon: 'unlock',
    text: 'actions.unlock',
  },
  unlocked: {
    icon: 'lock',
    text: 'actions.lock',
  },
};

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'user-item',
  },
})
export class UserItemComponent
  extends withRequiredPropsCheck()
  implements OnInit
{
  @Input() user!: User;

  constructor(
    private store: Store,
    private translateService: TranslateService
  ) {
    super();
  }

  get actionButtons(): ActionButton[] {
    return [
      {
        translate: USER_STATE_OPTIONS[this.userState].text,
        clickHandler: this.onUserLockStateChange.bind(this, this.user),
        icon: USER_STATE_OPTIONS[this.userState].icon,
      },
      {
        translate: 'actions.delete',
        clickHandler: this.onUserDelete.bind(this, this.user),
        icon: 'delete',
        danger: true,
      },
    ];
  }

  ngOnInit(): void {
    this.checkRequiredProps(['user']);
  }

  get userState(): UserState {
    return this.user.isDisable ? 'locked' : 'unlocked';
  }

  private onUserLockStateChange(user: User): void {
    this.store.dispatch(
      UsersActions.updateUserLockStateRequest({
        userId: user.id,
        isLock: !user.isDisable,
      })
    );
  }

  private onUserDelete(user: User): void {
    this.store.dispatch(
      SharedActions.showConfirm({
        config: {
          text: this.translateService.instant('components.admin.deleteConfirm'),
          callback: () =>
            this.store.dispatch(UsersActions.deleteUserRequest(user.id)),
        },
      })
    );
  }
}
