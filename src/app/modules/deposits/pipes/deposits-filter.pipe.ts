import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

import { FilterService } from '@services/filter.service';
import { Deposit } from '../models/deposit.model';

@Pipe({
  name: 'depositsFilter',
})
export class DepositsFilterPipe implements PipeTransform {
  constructor(private filterService: FilterService, private datePipe: DatePipe) {}

  transform(deposits: Deposit[], terms: string = ''): Deposit[] {
    if (!terms) {
      return deposits;
    }
    return deposits.filter((deposit: Deposit) =>
      this.getUpperCasedTerms(terms).every((term: string) =>
        Object.entries(deposit)
          .reduce((accum: string) => {
            const filterArray: string[] = [];
            this.filterService.pushValue(filterArray, deposit.currencyId);
            this.filterService.pushValue(filterArray, deposit.currencyCode);
            this.filterService.pushValue(filterArray, deposit.typeName);
            this.filterService.pushValue(filterArray, deposit.rate);
            this.filterService.pushValue(filterArray, deposit.accToReplenish.bankCode);
            this.filterService.pushValue(filterArray, deposit.accToReplenish.bankName);
            this.filterService.pushValue(filterArray, deposit.accToReplenish.taxCode);
            this.filterService.pushValue(filterArray, deposit.accToReplenish.name);
            this.filterService.pushValue(filterArray, deposit.accToReplenish.accNumber);
            this.filterService.pushValue(filterArray, deposit.accToReplenish.accCurrencyCode);
            this.filterService.pushValue(filterArray, deposit.replenishDefaultPurpose);
            this.filterService.pushValue(filterArray, +deposit.interestAccrual!);
            this.filterService.pushValue(filterArray, +deposit.interestPaid!);
            this.filterService.pushValue(filterArray, deposit.transferBankId);
            this.filterService.pushValue(filterArray, deposit.bankId);
            this.filterService.pushValue(filterArray, deposit.transferAccountNumber);
            this.filterService.pushValue(filterArray, deposit.transferAccountName);
            this.filterService.pushValue(filterArray, deposit.transferCustomerCode);
            this.filterService.pushValue(filterArray, deposit.balance);
            this.filterService.pushValue(filterArray, this.datePipe.transform(deposit.beginDate, 'dd.MM.yyyy'));
            this.filterService.pushValue(filterArray, this.datePipe.transform(deposit.endDate, 'dd.MM.yyyy'));
            this.filterService.pushValue(filterArray, this.datePipe.transform(deposit.termAdd, 'dd.MM.yyyy'));
            this.filterService.pushValue(filterArray, this.datePipe.transform(deposit.termAddDate, 'dd.MM.yyyy'));
            this.filterService.pushValue(filterArray, deposit.minAddSum);
            this.filterService.pushValue(filterArray, deposit.maxProlongations);
            this.filterService.pushValue(filterArray, deposit.comments);
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
