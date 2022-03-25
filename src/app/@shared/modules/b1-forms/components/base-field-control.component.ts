import { Component, Input, HostListener } from '@angular/core';

import { BaseValidatableControlComponent } from './base-validatable-control.component';

type TEvent = 'input' | 'change';

@Component({
  template: '',
})
export abstract class BaseFieldControlComponent extends BaseValidatableControlComponent {
  @Input() updateOn: TEvent = 'input';
  @Input() onTouched: boolean = true;

  placeholder = ' ';

  @HostListener('input', ['$event'])
  onControlInput(evt: Event): boolean | void {
    return (
      this.updateOn === 'input' &&
      this.handleValue((evt.target as HTMLInputElement).value /* .trim() */)
    );
  }

  @HostListener('change', ['$event'])
  onControlChange(evt: Event): boolean | void {
    return (
      this.updateOn === 'change' &&
      this.handleValue((evt.target as HTMLInputElement).value /* .trim() */)
    );
  }

  @HostListener('focusout')
  onControlFocusOut(): boolean | void {
    return this.onTouched && this.onFocusOut();
  }

  protected handleValue(value: string): void {
    this.onChange(value);
    this.writeValue(value);
  }
}
