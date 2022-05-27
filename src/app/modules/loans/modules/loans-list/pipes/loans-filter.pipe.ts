import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

import { FilterService } from '@services/filter.service';
import { Loan } from '../../../models/loan.model';

@Pipe({
  name: 'loansFilter',
})
export class LoansFilterPipe implements PipeTransform {
  constructor(private filterService: FilterService, private datePipe: DatePipe) {}

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
            this.filterService.pushValue(filterArray, this.datePipe.transform(loan.contractDate, 'dd.MM.yyyy'));
            this.filterService.pushValue(filterArray, loan.contractNumber);
            this.filterService.pushValue(filterArray, this.datePipe.transform(loan.dateEnd, 'dd.MM.yyyy'));
            this.filterService.pushValue(filterArray, loan.percents);
            this.filterService.pushValue(filterArray, loan.payPeriod);
            this.filterService.pushValue(filterArray, loan.currencyCode);
            this.filterService.pushValue(filterArray, loan.amount);
            this.filterService.pushValue(filterArray, loan.rest);
            this.filterService.pushValue(filterArray, loan.commission);
            this.filterService.pushValue(filterArray, +loan.overdueCommission!);
            this.filterService.pushValue(filterArray, loan.repaymentAccount.bankCode);
            this.filterService.pushValue(filterArray, loan.repaymentAccount.bankCode);
            this.filterService.pushValue(filterArray, loan.repaymentAccount.bankName);
            this.filterService.pushValue(filterArray, loan.repaymentAccount.taxCode);
            this.filterService.pushValue(filterArray, loan.repaymentAccount.name);
            this.filterService.pushValue(filterArray, loan.repaymentAccount.accNumber);
            this.filterService.pushValue(filterArray, loan.repaymentAccount.accCurrencyCode);
            this.filterService.pushValue(filterArray, loan.repaymentDefaultPurpose);
            this.filterService.pushValue(filterArray, loan.percentAmount);
            this.filterService.pushValue(filterArray, this.datePipe.transform(loan.percentPayTerm, 'dd.MM.yyyy'));
            this.filterService.pushValue(filterArray, loan.outstandingDebet);
            this.filterService.pushValue(filterArray, loan.outstandingPercent);
            this.filterService.pushValue(filterArray, loan.percentByOutstandingDebet);
            this.filterService.pushValue(filterArray, this.datePipe.transform(loan.dateBegin, 'dd.MM.yyyy'));
            this.filterService.pushValue(filterArray, loan.minRepay);
            this.filterService.pushValue(filterArray, +loan.percentPay!);
            this.filterService.pushValue(filterArray, loan.outFine);
            this.filterService.pushValue(filterArray, loan.totalSum);
            this.filterService.pushValue(filterArray, this.datePipe.transform(loan.payTerm, 'dd.MM.yyyy'));
            this.filterService.pushValue(filterArray, loan.amountEarlyPay);
            this.filterService.pushValue(filterArray, this.datePipe.transform(loan.lastPayDate, 'dd.MM.yyyy'));
            this.filterService.pushValue(filterArray, loan.lastPayAmount);
            this.filterService.pushValue(filterArray, loan.percentAmount + loan.outstandingPercent);
            this.filterService.pushValue(filterArray, loan.rest + loan.outstandingDebet);
            this.filterService.pushValue(filterArray, loan.commission + +loan.overdueCommission! + loan.outFine);
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
