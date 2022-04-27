import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberToArray',
})
export class NumberToArrayPipe implements PipeTransform {
  transform(num: number): number[] {
    return new Array(num)
      .toString()
      .split(',')
      .map((_, i: number) => i);
  }
}
