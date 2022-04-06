import { AbstractControl } from '@angular/forms';

export type ModelControl<T> = {
  [P in keyof Required<T>]: Pick<T, P> extends Required<Pick<T, P>>
    ? AbstractControl
    : AbstractControl;
};
