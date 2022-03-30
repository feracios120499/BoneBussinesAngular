import { Pipe, PipeTransform } from '@angular/core';
import { FilterService } from '@services/filter.service';

@Pipe({
  name: 'filterByTerm',
})
export class FilterByTermPipe implements PipeTransform {
  constructor(private filterService: FilterService) {}

  transform<T>(arr: T[], terms: string = '', filterKeys: string[]): T[] {
    if (!terms) {
      return arr;
    }
    return arr.filter((item: T) =>
      this.getUpperCasedTerms(terms).every((term: string) =>
        Object.entries(item)
          .filter(([key]) => filterKeys.includes(key))
          .reduce((accum: string, [_, value]) => {
            const filterArray: string[] = [];
            switch (true) {
              case this.checkDate(value):
                this.filterService.pushDateValue(filterArray, value as Date);
                break;
              case typeof value === 'number':
                this.filterService.pushMoneyValue(filterArray, value as number);
                break;
              default:
                this.filterService.pushValue(filterArray, value);
                break;
            }
            const filterStr: string = filterArray
              .join('')
              .split(' ')
              .map((str: string) => str.trim())
              .filter((str: string) => str !== '')
              .join('');
            return accum + filterStr;
          }, '')
          .includes(term)
      )
    );
  }

  private getUpperCasedTerms(terms: string): string[] {
    return terms
      .toUpperCase()
      .split(' ')
      .filter((str: string) => str !== '')
      .map((str: string) => str.trim());
  }

  private checkDate(value: Date | string | number): boolean {
    return (
      value instanceof Date ||
      (typeof value === 'string' && !isNaN(Date.parse(value)))
    );
  }
}
