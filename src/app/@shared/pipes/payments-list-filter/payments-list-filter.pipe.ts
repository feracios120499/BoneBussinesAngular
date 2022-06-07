import { Pipe, PipeTransform } from '@angular/core';

import { FilterService } from '@services/filter.service';
import { UiPaymentsListItem } from '@modules/payments/models/payments-list-item.model';

@Pipe({
  name: 'paymentsListFilter',
})
export class PaymentsListFilter implements PipeTransform {
  constructor(private filterService: FilterService) {}

  transform(payments: UiPaymentsListItem[], terms: string = ''): UiPaymentsListItem[] {
    if (!terms) {
      return payments;
    }
    return payments.filter((payment: UiPaymentsListItem) =>
      this.getUpperCasedTerms(terms).every((term: string) =>
        Object.entries(payment)
          .reduce((accum: string) => {
            const filterArray: string[] = [];
            this.filterService.pushValue(filterArray, payment.sender.accNumber);
            this.filterService.pushValue(filterArray, payment.sender.bankName);
            this.filterService.pushValue(filterArray, payment.sender.taxCode);
            this.filterService.pushValue(filterArray, payment.sender.taxCode);
            this.filterService.pushValue(filterArray, payment.sender.name);

            this.filterService.pushValue(filterArray, payment.recipient.accNumber);
            this.filterService.pushValue(filterArray, payment.recipient.bankName);
            this.filterService.pushValue(filterArray, payment.recipient.taxCode);
            this.filterService.pushValue(filterArray, payment.recipient.taxCode);
            this.filterService.pushValue(filterArray, payment.recipient.name);

            this.filterService.pushValue(filterArray, payment.number);
            this.filterService.pushValue(filterArray, payment.purpose);
            this.filterService.pushValue(filterArray, payment.amountString);
            this.filterService.pushMoneyValue(filterArray, payment.amount);
            this.filterService.pushDateValue(filterArray, payment.dateCreated);
            this.filterService.pushDateValue(filterArray, payment.docDate);
            this.filterService.pushDateValue(filterArray, payment.dateBankPayed);
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
