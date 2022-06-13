import { Pipe, PipeTransform } from '@angular/core';

import { FilterService } from '@services/filter.service';
import { ImportResponsRow } from '@modules/payments/models/import-response.model';
import { PaymentDetails } from '@modules/payments/models/payment-details.model';
import { SwiftDetails } from '@modules/payments/models/swift-details.model';

@Pipe({
  name: 'importResponseFilter',
})
export class ImportResponseFilterPipe implements PipeTransform {
  constructor(private filterService: FilterService) {}

  transform(payments: ImportResponsRow[], terms: string = ''): ImportResponsRow[] {
    if (!terms) {
      return payments;
    }
    return payments.filter((payment: ImportResponsRow) =>
      this.getUpperCasedTerms(terms).every((term: string) =>
        Object.entries(payment)
          .reduce((accum: string) => {
            let filterArray: string[] = [];
            if ('benificiary' in payment.model) {
              filterArray = this.filterSwift(filterArray, payment.model as SwiftDetails);
            } else {
              filterArray = this.filterPaymentDetails(filterArray, payment.model as PaymentDetails);
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

  private filterSwift(filterArray: string[], payment: SwiftDetails): string[] {
    this.filterService.pushMoneyValue(filterArray, payment.amount);

    this.filterService.pushValue(filterArray, payment.benificiary.accNumber);
    this.filterService.pushValue(filterArray, payment.benificiary.iban);
    this.filterService.pushValue(filterArray, payment.benificiary.location);
    this.filterService.pushValue(filterArray, payment.benificiary.name);

    this.filterService.pushValue(filterArray, payment.benificiary.bank.corrAccNumber);
    this.filterService.pushValue(filterArray, payment.benificiary.bank.location);
    this.filterService.pushValue(filterArray, payment.benificiary.bank.name);
    this.filterService.pushValue(filterArray, payment.benificiary.bank.swift);

    this.filterService.pushValue(filterArray, payment.details);
    this.filterService.pushValue(filterArray, payment.other);
    this.filterService.pushValue(filterArray, payment.paymentFee);
    this.filterService.pushValue(filterArray, payment.purpose);

    this.filterService.pushValue(filterArray, payment.senderAccount.accCurrencyCode);
    this.filterService.pushValue(filterArray, payment.senderAccount.accNumber);
    this.filterService.pushValue(filterArray, payment.senderAccount.name);

    this.filterService.pushValue(filterArray, payment.senderData.location);
    this.filterService.pushValue(filterArray, payment.senderData.name);
    this.filterService.pushValue(filterArray, payment.senderData.taxCode);
    this.filterService.pushDateValue(filterArray, payment.paymentDate);
    this.filterService.pushDateValue(filterArray, payment.paymentValueDate);

    return filterArray;
  }

  private filterPaymentDetails(filterArray: string[], payment: PaymentDetails): string[] {
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
    this.filterService.pushDateValue(filterArray, payment.creatingDate);
    this.filterService.pushDateValue(filterArray, payment.paymentDate);
    this.filterService.pushDateValue(filterArray, payment.paymentValueDate);

    return filterArray;
  }

  private getUpperCasedTerms(terms: string): string[] {
    return terms
      .toUpperCase()
      .split(' ')
      .filter((str: string) => str !== '')
      .map((str: string) => str.trim());
  }
}
