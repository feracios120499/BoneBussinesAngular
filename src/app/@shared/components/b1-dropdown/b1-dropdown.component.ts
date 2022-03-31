import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

import { withRequiredPropsCheck } from '@mixins/with-required-props-check.mixin';

export interface ActionButton {
  translate: string;
  clickHandler: (data: any) => void;
  icon?: string;
  isDisabled?: boolean;
  separate?: boolean;
  danger?: boolean;
}

@Component({
  selector: 'b1-dropdown',
  templateUrl: './b1-dropdown.component.html',
  styleUrls: ['./b1-dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class B1DropdownComponent
  extends withRequiredPropsCheck()
  implements OnInit
{
  @Input() buttons!: ActionButton[];
  @Input() label!: string;
  @Input() minWidth = 'auto';
  @Input() maxWidth = 'none';
  @Input() top = false;
  @Input() left = true;
  @Input() display: 'dynamic' | 'static' = 'dynamic';

  ngOnInit(): void {
    this.checkRequiredProps(['buttons', 'label']);
  }
}
