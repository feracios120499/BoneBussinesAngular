import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { BaseButtonComponent } from '../base-button.component';

@Component({
  selector: 'b1-button',
  templateUrl: './b1-button.component.html',
  styleUrls: ['./b1-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class B1ButtonComponent extends BaseButtonComponent {
  @Input() filled: boolean = true;
  @Input() mobileView: boolean = false;
}
