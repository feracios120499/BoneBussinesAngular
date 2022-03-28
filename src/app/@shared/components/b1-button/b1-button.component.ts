import { ChangeDetectionStrategy, Component } from '@angular/core';

import { BaseButtonComponent } from '../base-button.component';

@Component({
  selector: 'app-b1-button',
  templateUrl: './b1-button.component.html',
  styleUrls: ['./b1-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class B1ButtonComponent extends BaseButtonComponent {}
