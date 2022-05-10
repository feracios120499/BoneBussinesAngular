import { Pipe, PipeTransform } from '@angular/core';

import { FilterService } from '@services/filter.service';
import { UiTransaction } from '@modules/accounts/models/transaction.model';

@Pipe({
  name: 'transactionsFilter',
})
export class TransactionsFilterPipe implements PipeTransform {
  constructor(private filterService: FilterService) {}

  transform(transactions: UiTransaction[], terms: string = ''): UiTransaction[] {
    if (!terms) {
      return transactions;
    }
    return transactions.filter((transaction: UiTransaction) =>
      this.getUpperCasedTerms(terms).every((term: string) =>
        Object.entries(transaction)
          .reduce((accum: string) => {
            const filterArray: string[] = [];

            this.filterService.pushValue(filterArray, transaction.sender.accNumber);
            this.filterService.pushValue(filterArray, transaction.sender.bankName);
            this.filterService.pushValue(filterArray, transaction.sender.taxCode);
            this.filterService.pushValue(filterArray, transaction.sender.taxCode);
            this.filterService.pushValue(filterArray, transaction.sender.name);

            this.filterService.pushValue(filterArray, transaction.recipient.accNumber);
            this.filterService.pushValue(filterArray, transaction.recipient.bankName);
            this.filterService.pushValue(filterArray, transaction.recipient.taxCode);
            this.filterService.pushValue(filterArray, transaction.recipient.taxCode);
            this.filterService.pushValue(filterArray, transaction.recipient.name);

            this.filterService.pushValue(filterArray, transaction.id);
            this.filterService.pushValue(filterArray, transaction.number);
            this.filterService.pushValue(filterArray, transaction.purpose);
            this.filterService.pushValue(filterArray, transaction.amountString);
            this.filterService.pushMoneyValue(filterArray, transaction.amount);
            this.filterService.pushDateValue(filterArray, transaction.createdDate);
            this.filterService.pushDateValue(filterArray, transaction.documentDate);
            this.filterService.pushDateValue(filterArray, transaction.payedDate);
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
