import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

import { withRequiredPropsCheck } from '@mixins/with-required-props-check.mixin';

@Component({
  selector: 'b1-empty',
  templateUrl: './b1-empty.component.html',
  styleUrls: ['./b1-empty.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class B1EmptyComponent
  extends withRequiredPropsCheck()
  implements OnInit
{
  @Input() svgName!: string;
  @Input() header!: string;
  @Input() description?: string;

  ngOnInit(): void {
    this.checkRequiredProps(['svgName', 'header']);
  }
}
