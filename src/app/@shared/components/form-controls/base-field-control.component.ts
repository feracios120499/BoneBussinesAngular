import { Component, Input, HostListener } from '@angular/core';

import { BaseValidatableControlComponent } from './base-validatable-control.component';

@Component({
  template: '',
})
export abstract class BaseFieldControlComponent extends BaseValidatableControlComponent {
  @Input() onTouched: boolean = true;
  @Input() placeholder = '';
  @Input() labelTop: boolean = true;

  @HostListener('focusout')
  onControlFocusOut(): boolean | void {
    return this.onTouched && this.onFocusOut();
  }

  get labelClasses(): string {
    const classes = this.labelTop ? 'b1-input__label_top b1-small b1-bold' : 'b1-base';
    return `b1-input__label ${classes}`;
  }

  // protected handleValue(value: string): void {
  //   this.onChange(value);
  //   // this.writeValue(value);
  // }
}
