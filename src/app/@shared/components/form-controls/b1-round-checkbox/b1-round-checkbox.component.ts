import { AfterViewInit, Component } from '@angular/core';

import { provideValueAccessor } from '@methods/provide-value-accessor.method';
import { BaseControlComponent } from '@form-controls/base-control.component';

@Component({
  selector: 'b1-round-checkbox',
  templateUrl: './b1-round-checkbox.component.html',
  styleUrls: ['./b1-round-checkbox.component.scss'],
  providers: [provideValueAccessor(B1RoundCheckboxComponent)],
  host: {
    class: 'b1-group-checkboxs_item',
  },
})
export class B1RoundCheckboxComponent extends BaseControlComponent implements AfterViewInit {
  handleValue(value: boolean): void {
    this.onChange(value);
  }

  ngAfterViewInit(): void {
    super.ngAfterViewInit();
    if (!this.labelRef.nativeElement.innerText) {
      throw new Error('Label text is required!');
    }
  }
}
