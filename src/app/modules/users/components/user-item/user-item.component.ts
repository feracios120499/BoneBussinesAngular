import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { UsersActions } from '@store/users/actions';
import { SharedActions } from '@store/shared/actions';
import { withRequiredPropsCheck } from '@mixins/with-required-props-check.mixin';
import { User } from '@models/users/user.model';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'user-item',
  },
})
export class UserItemComponent extends withRequiredPropsCheck() implements OnInit {
  @Input() user!: User;

  constructor(private store: Store, private translateService: TranslateService) {
    super();
  }

  ngOnInit(): void {
    this.checkRequiredProps(['user']);
  }

  onUserLockStateChange(user: User): void {
    this.store.dispatch(
      UsersActions.updateUserLockStateRequest({
        userId: user.id,
        isLock: !user.isDisable,
      })
    );
  }

  onUserDelete(user: User): void {
    this.store.dispatch(
      SharedActions.showConfirm({
        config: {
          text: `${this.translateService.instant('components.admin.deleteConfirm')} ${user.displayName}?`,
          callback: () => this.store.dispatch(UsersActions.deleteUserRequest(user.id)),
        },
      })
    );
  }
}
