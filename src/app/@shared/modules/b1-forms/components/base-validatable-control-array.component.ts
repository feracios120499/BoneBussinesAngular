import { Component } from '@angular/core';
import { AbstractControl, ControlContainer } from '@angular/forms';
import { BaseControlArrayComponent } from './base-control-array.component';

@Component({
  template: '',
})
export abstract class BaseValidatableControlArrayComponent extends BaseControlArrayComponent {
  constructor(controlContainer: ControlContainer) {
    super(controlContainer);
  }

  ngOnInit(): void {
    this.formArray.controls.forEach((formGroup: AbstractControl) =>
      this.setValidators(formGroup)
    );
  }

  protected abstract setValidators(formGroup: AbstractControl): void;
}
