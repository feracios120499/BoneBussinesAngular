import { Component } from '@angular/core';

import { provideValueAccessor } from '@methods/provide-value-accessor.method';
import { BaseControlComponent } from '@forms/base-control.component';

@Component({
  selector: 'b1-switcher',
  templateUrl: './b1-switcher.component.html',
  styleUrls: ['./b1-switcher.component.scss'],
  providers: [provideValueAccessor(B1SwitcherComponent)],
  host: {
    class: 'b1-switcher b1-p-3 b1-flex b1-align-center',
  },
})
export class B1SwitcherComponent extends BaseControlComponent {
  handleValue(value: boolean): void {
    this.onChange(value);
  }
}
