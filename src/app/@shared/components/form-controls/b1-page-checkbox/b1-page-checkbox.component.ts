import { Component } from '@angular/core';

import { provideValueAccessor } from '@methods/provide-value-accessor.method';
import { BaseControlComponent } from '@form-controls/base-control.component';

@Component({
  selector: 'b1-page-checkbox',
  templateUrl: './b1-page-checkbox.component.html',
  styleUrls: ['./b1-page-checkbox.component.scss'],
  providers: [provideValueAccessor(B1PageCheckboxComponent)],
})
export class B1PageCheckboxComponent extends BaseControlComponent {
  handleValue(value: boolean): void {
    this.onChange(value);
  }
}
