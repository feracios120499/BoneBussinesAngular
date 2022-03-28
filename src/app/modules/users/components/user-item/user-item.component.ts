import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

import { withRequiredPropsCheck } from '@mixins/with-required-props-check.mixin';

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
  @Input() user!: { id: number };

  ngOnInit(): void {
    this.checkRequiredProps(['user']);
  }
}
