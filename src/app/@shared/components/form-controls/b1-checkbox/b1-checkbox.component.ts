import { AfterViewInit, Component } from '@angular/core';

import { provideValueAccessor } from '@methods/provide-value-accessor.method';
import { BaseControlComponent } from '../base-control.component';

@Component({
  selector: 'b1-checkbox',
  templateUrl: './b1-checkbox.component.html',
  styleUrls: ['./b1-checkbox.component.scss'],
  providers: [provideValueAccessor(B1CheckboxComponent)],
  // host: {
  //   class: 'b1-input',
  // },
})
export class B1CheckboxComponent extends BaseControlComponent implements AfterViewInit {
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
