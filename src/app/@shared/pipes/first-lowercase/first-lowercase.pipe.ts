import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstLowercase',
})
export class FirstLowercasePipe implements PipeTransform {
  transform(value = ''): string {
    return value && value.slice(0, 1).toLowerCase() + value.slice(1);
  }
}
