import { Component, Input, HostListener } from '@angular/core';

import { BaseValidatableControlComponent } from './base-validatable-control.component';

@Component({
  template: '',
})
export abstract class BaseFieldControlComponent extends BaseValidatableControlComponent {
  @Input() onTouched: boolean = true;
  @Input() placeholder = '';

  @HostListener('focusout')
  onControlFocusOut(): boolean | void {
    return this.onTouched && this.onFocusOut();
  }

  // protected handleValue(value: string): void {
  //   this.onChange(value);
  //   // this.writeValue(value);
  // }
}
