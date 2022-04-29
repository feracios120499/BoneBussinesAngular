import { Pipe, PipeTransform } from '@angular/core';
import { Correspondent } from '@modules/correspondents/models/correspondent.model';

import { FilterService } from '@services/filter.service';

@Pipe({
  name: 'correspondentsFilter',
})
export class CorrespondentsFilterPipe implements PipeTransform {
  constructor(private filterService: FilterService) {}

  transform(correspondents: Correspondent[], terms: string = ''): Correspondent[] {
    if (!terms) {
      return correspondents;
    }
    return correspondents.filter((correspondent: Correspondent) =>
      this.getUpperCasedTerms(terms).every((term: string) =>
        Object.entries(correspondent)
          .reduce((accum: string) => {
            const filterArray: string[] = [];
            this.filterService.pushValue(filterArray, correspondent.name);
            this.filterService.pushValue(filterArray, correspondent.taxCode);
            this.filterService.pushValue(filterArray, correspondent.accNumber);
            this.filterService.pushValue(filterArray, correspondent.bankName);
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
