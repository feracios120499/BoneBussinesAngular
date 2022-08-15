import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight',
})
export class HighlightPipe implements PipeTransform {
  transform(value: string, search: string, classSpan: string = 'b1-color-primary'): any {
    if (!search) {
      return value;
    }

    const regex = new RegExp(search, 'gi');
    const match = value.match(regex);

    if (!match) {
      return value;
    }

    return value.replace(regex, `<span class='${classSpan}'>${match[0]}</span>`);
  }
}
