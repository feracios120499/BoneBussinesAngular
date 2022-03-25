import { Type, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

interface IValueAccessorProvider {
  provide: typeof NG_VALUE_ACCESSOR;
  useExisting: Type<any>;
  multi: boolean;
}

export function provideValueAccessor(component: any): IValueAccessorProvider {
  return {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => component),
    multi: true,
  };
}
