import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initials',
})
export class InitialsPipe implements PipeTransform {
  transform(value: string = ''): string {
    return (
      value &&
      value
        .split(' ')
        .map((str: string) => str.trim())
        .filter((str: string) => !!str)
        .map((str: string) => str.slice(0, 1).toUpperCase())
        .join('')
    );
  }
}
