import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { SharedActions } from '@store/shared/actions';
import { withRequiredPropsCheck } from '@mixins/with-required-props-check.mixin';
import { TranslateService } from '@ngx-translate/core';
import { User } from '@modules/users/models/user.model';
import { UsersActions } from '@modules/users/store/actions';

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

  onUserLockStateChange(): void {
    this.store.dispatch(
      UsersActions.updateUserLockStateRequest({
        userId: this.user.id,
        isLock: !this.user.isDisable,
      })
    );
  }

  onUserDelete(): void {
    this.store.dispatch(
      SharedActions.showConfirm({
        config: {
          text: `${this.translateService.instant('components.admin.deleteConfirm')} ${this.user.displayName}?`,
          callback: () => this.store.dispatch(UsersActions.deleteUserRequest(this.user.id)),
        },
      })
    );
  }
}
