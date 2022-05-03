import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

import { BaseButtonComponent } from '../base-button.component';

type ButtonMode = 'primary' | 'error' | 'warning';
type MobileView = 'full' | 'round' | '';

@Component({
  selector: 'b1-button',
  templateUrl: './b1-button.component.html',
  styleUrls: ['./b1-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class B1ButtonComponent extends BaseButtonComponent {
  @Input() filled: boolean = true;
  @Input() mode: ButtonMode = 'primary';
  @Input() mobileView: MobileView = '';

  get classes(): { [key: string]: boolean } {
    return {
      [`b1-button-${this.mode}`]: true,
      [`b1-button-${this.mode}_filled`]: this.filled,
      round: this.mobileView === 'round',
      ['full-mobile']: this.mobileView === 'full',
    };
  }

  @HostBinding('class.full')
  get hostClass(): boolean {
    return this.mobileView === 'full';
  }
}
