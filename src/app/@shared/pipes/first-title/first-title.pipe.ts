import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'firstTitle' })
export class FirstTitlePipe implements PipeTransform {
  transform(value?: string): string {
    return value ? value.charAt(0).toUpperCase() + value.slice(1) : '';
  }
}
