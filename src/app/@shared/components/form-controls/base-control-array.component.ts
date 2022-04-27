import { Component } from '@angular/core';
import { ControlContainer, FormArray } from '@angular/forms';

@Component({
  template: '',
})
export abstract class BaseControlArrayComponent {
  constructor(protected controlContainer: ControlContainer) {}

  get formArray(): FormArray {
    return this.controlContainer.control as FormArray;
  }
}
