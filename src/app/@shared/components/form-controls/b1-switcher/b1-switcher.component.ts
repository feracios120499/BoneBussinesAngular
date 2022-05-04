import { AfterViewInit, Component } from '@angular/core';

import { provideValueAccessor } from '@methods/provide-value-accessor.method';
import { BaseControlComponent } from '../base-control.component';

@Component({
  selector: 'b1-switcher',
  templateUrl: './b1-switcher.component.html',
  styleUrls: ['./b1-switcher.component.scss'],
  providers: [provideValueAccessor(B1SwitcherComponent)],
  host: {
    class: 'b1-switcher b1-p-3 b1-flex b1-align-center',
  },
})
export class B1SwitcherComponent extends BaseControlComponent implements AfterViewInit {
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
