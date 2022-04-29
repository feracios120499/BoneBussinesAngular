import { Component, Input, OnInit } from '@angular/core';

import { provideValueAccessor } from '@methods/provide-value-accessor.method';
import { BaseControlComponent } from '@form-controls/base-control.component';

@Component({
  selector: 'app-b1-radio-button',
  templateUrl: './b1-radio-button.component.html',
  styleUrls: ['./b1-radio-button.component.scss'],
  providers: [provideValueAccessor(B1RadioButtonComponent)],
  host: {
    class: 'b1-input',
  },
})
export class B1RadioButtonComponent extends BaseControlComponent implements OnInit {
  @Input() name!: string;

  handleValue(value: boolean): void {
    this.onChange(value);
  }

  ngOnInit(): void {
    this.checkRequiredProps(['name']);
  }
}
