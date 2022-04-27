import { Component } from '@angular/core';

import { provideValueAccessor } from '@methods/provide-value-accessor.method';
import { BaseInputComponent } from '../base-input.component';

@Component({
  selector: 'b1-input',
  templateUrl: './b1-input.component.html',
  styleUrls: ['./b1-input.component.scss'],
  providers: [provideValueAccessor(B1InputComponent)],
  host: {
    class: 'b1-input',
  },
})
export class B1InputComponent extends BaseInputComponent {}
