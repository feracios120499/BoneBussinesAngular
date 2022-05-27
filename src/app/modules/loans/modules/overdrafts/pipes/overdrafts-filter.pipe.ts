import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { Overdraft } from '@modules/loans/models/overdraft.model';
import { FilterService } from '@services/filter.service';

@Pipe({
  name: 'overdraftsFilter',
})
export class OverdraftsFilterPipe implements PipeTransform {
  constructor(private filterService: FilterService, private datePipe: DatePipe) {}

  transform(overdrafts: Overdraft[], terms: string = ''): Overdraft[] {
    if (!terms) {
      return overdrafts;
    }
    return overdrafts.filter((overdraft: Overdraft) =>
      this.getUpperCasedTerms(terms).every((term: string) =>
        Object.entries(overdraft)
          .reduce((accum: string) => {
            const filterArray: string[] = [];
            this.filterService.pushValue(filterArray, overdraft.bankId);
            this.filterService.pushValue(filterArray, overdraft.accountNumber);
            this.filterService.pushValue(filterArray, overdraft.currencyCode);
            this.filterService.pushValue(filterArray, overdraft.contractNumber);
            this.filterService.pushValue(filterArray, this.datePipe.transform(overdraft.contractDate, 'dd.MM.yyyy'));
            this.filterService.pushValue(filterArray, overdraft.activeLimit);
            this.filterService.pushValue(filterArray, overdraft.rate);
            this.filterService.pushValue(filterArray, this.datePipe.transform(overdraft.maturityTDate, 'dd.MM.yyyy'));
            this.filterService.pushValue(filterArray, overdraft.usedLimit);
            this.filterService.pushValue(filterArray, overdraft.accruedInterest);
            this.filterService.pushValue(filterArray, overdraft.commission);
            this.filterService.pushValue(filterArray, overdraft.unusedLimit);
            this.filterService.pushValue(filterArray, overdraft.overUsedLimit);
            this.filterService.pushValue(filterArray, overdraft.overAccruedInterest);
            this.filterService.pushValue(filterArray, overdraft.overCommission);
            this.filterService.pushValue(filterArray, overdraft.accruedInterest + overdraft.overCommission);
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
