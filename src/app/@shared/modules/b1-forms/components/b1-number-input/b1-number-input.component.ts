import { Component, Input } from '@angular/core';

import { provideValueAccessor } from '@methods/provide-value-accessor.method';
import { BaseFieldControlComponent } from '@forms/base-field-control.component';

@Component({
  selector: 'b1-number-input',
  templateUrl: './b1-number-input.component.html',
  styleUrls: ['./b1-number-input.component.scss'],
  providers: [provideValueAccessor(B1NumberInputComponent)],
  host: {
    class: 'b1-input',
  },
})
export class B1NumberInputComponent extends BaseFieldControlComponent {
  @Input() minLength: number | string = 0;
  @Input() maxLength: number | string = Infinity;

  handleValue(value: string): void {
    this.onChange(value);
  }
}
