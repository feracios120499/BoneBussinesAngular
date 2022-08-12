import { Pipe, PipeTransform } from '@angular/core';
import { UiSupDocumentListItem } from '@models/sup-documents/sup-document.model';
import { FilterService } from '@services/filter.service';

@Pipe({
  name: 'supdocumentsFilter'
})
export class SupdocumentsFilterPipe implements PipeTransform {
  constructor(private filterService: FilterService) {


  }
  transform(supdocuments: UiSupDocumentListItem[], terms: string = ''): UiSupDocumentListItem[] {
    if (!terms) {
      return supdocuments;
    }
    return supdocuments.filter((supdocument: UiSupDocumentListItem) =>
      this.getUpperCasedTerms(terms).every((term: string) =>
        Object.entries(supdocument)
          .reduce((accum: string) => {
            const filterArray: string[] = [];
            this.filterService.pushValue(filterArray, supdocument.fileName);
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
