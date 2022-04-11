import { Component } from '@angular/core';

import { provideValueAccessor } from '@methods/provide-value-accessor.method';
import { BaseControlComponent } from '@forms/base-control.component';

@Component({
  selector: 'b1-checkbox',
  templateUrl: './b1-checkbox.component.html',
  styleUrls: ['./b1-checkbox.component.scss'],
  providers: [provideValueAccessor(B1CheckboxComponent)],
  host: {
    class: 'b1-checkbox',
  },
})
export class B1CheckboxComponent extends BaseControlComponent {
  handleValue(value: boolean): void {
    this.onChange(value);
  }
}
