import { Component, Input } from '@angular/core';

import { provideValueAccessor } from '@methods/provide-value-accessor.method';
import { BaseFieldControlComponent } from '@form-controls/base-field-control.component';

@Component({
  selector: 'b1-textarea',
  templateUrl: './b1-textarea.component.html',
  styleUrls: ['./b1-textarea.component.scss'],
  providers: [provideValueAccessor(B1TextareaComponent)],
  host: {
    class: 'b1-input',
  },
})
export class B1TextareaComponent extends BaseFieldControlComponent {
  @Input() minLength?: number;
  @Input() maxLength?: number;
  @Input() autoHight: boolean = true;

  handleValue(value: string): void {
    this.onChange(value);
  }
}
