import { Pipe, PipeTransform } from '@angular/core';

import { FilterService } from '@services/filter.service';
import { Loan } from '../../../models/loan.model';

@Pipe({
  name: 'loansFilter',
})
export class LoansFilterPipe implements PipeTransform {
  constructor(private filterService: FilterService) {}

  transform(loans: Loan[], terms: string = ''): Loan[] {
    if (!terms) {
      return loans;
    }
    return loans.filter((loan: Loan) =>
      this.getUpperCasedTerms(terms).every((term: string) =>
        Object.entries(loan)
          .reduce((accum: string) => {
            const filterArray: string[] = [];
            this.filterService.pushValue(filterArray, loan.loanType);
            this.filterService.pushValue(filterArray, loan.contractNumber);
            this.filterService.pushValue(filterArray, loan.percents);
            this.filterService.pushValue(filterArray, loan.amount);
            this.filterService.pushValue(filterArray, loan.outstandingDebet);
            this.filterService.pushValue(filterArray, loan.percentAmount);
            this.filterService.pushValue(filterArray, loan.totalSum);
            this.filterService.pushValue(filterArray, loan.repaymentDefaultPurpose);
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
