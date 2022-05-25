import { Pipe, PipeTransform } from '@angular/core';
import { Overdraft } from '@modules/loans/models/overdraft.model';
import { FilterService } from '@services/filter.service';

@Pipe({
  name: 'overdraftsFilter',
})
export class OverdraftsFilterPipe implements PipeTransform {
  constructor(private filterService: FilterService) {}

  transform(overdrafts: Overdraft[], terms: string = ''): Overdraft[] {
    if (!terms) {
      return overdrafts;
    }
    return overdrafts.filter((overdraft: Overdraft) =>
      this.getUpperCasedTerms(terms).every((term: string) =>
        Object.entries(overdraft)
          .reduce((accum: string) => {
            const filterArray: string[] = [];
            this.filterService.pushValue(filterArray, overdraft.contractNumber);
            this.filterService.pushValue(filterArray, overdraft.rate);
            this.filterService.pushValue(filterArray, overdraft.activeLimit);
            this.filterService.pushValue(filterArray, overdraft.unusedLimit);
            this.filterService.pushValue(filterArray, overdraft.maturityTDate);
            this.filterService.pushValue(filterArray, overdraft.overUsedLimit);
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
}
