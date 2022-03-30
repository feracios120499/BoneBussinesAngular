import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

import { withRequiredPropsCheck } from '@mixins/with-required-props-check.mixin';
import { User } from '@models/users/user.model';
import { ActionButton } from '@ui/b1-dropdown/b1-dropdown.component';

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

  get actionButtons(): ActionButton[] {
    return [
      {
        translate: 'actions.lock',
        clickHandler: this.onUserLock.bind(this, this.user.id),
        icon: 'lock',
      },
      {
        translate: 'actions.delete',
        clickHandler: this.onUserDelete.bind(this, this.user.id),
        icon: 'delete',
        danger: true,
      },
    ];
  }

  ngOnInit(): void {
    this.checkRequiredProps(['user']);
  }

  private onUserLock(userId: string): void {
    console.log('User is locked with id: ', userId);
  }

  private onUserDelete(userId: string): void {
    console.log('User is deleted with id: ', userId);
  }
}
