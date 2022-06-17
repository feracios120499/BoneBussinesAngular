import { Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';

import { provideValueAccessor } from '@methods/provide-value-accessor.method';
import { Observable } from 'rxjs';
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
export class B1InputComponent extends BaseInputComponent {
  @Input() data?: Observable<any>;
  @Output() selectData = new EventEmitter<any>();
  @Input() itemTemplate?: TemplateRef<any>;

  focused = false;
}
