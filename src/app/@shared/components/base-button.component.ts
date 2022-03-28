import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { withRequiredPropsCheck } from '@mixins/with-required-props-check.mixin';

type ButtonType = 'button' | 'submit';

@Component({
  template: '',
})
export class BaseButtonComponent
  extends withRequiredPropsCheck()
  implements OnInit
{
  @Input() type: ButtonType = 'button';
  @Input() isLoading: boolean | null = false;
  @Input() isDisabled: boolean | null = false;
  @Input() label!: string;
  @Input() icon?: string;
  @Output() btnClick = new EventEmitter();

  ngOnInit(): void {
    this.checkRequiredProps(['label']);
  }
}
