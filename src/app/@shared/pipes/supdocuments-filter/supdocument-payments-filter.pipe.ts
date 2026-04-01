import { Pipe, PipeTransform } from '@angular/core';
import { SupDocumentPayment } from '@modules/sup-documents/modules/supdocument/types/supdocument-payments.model';
import { FilterService } from '@services/filter.service';

@Pipe({
  name: 'supdocumentPaymentsFilter',
})
export class SupdocumentPaymentsFilterPipe implements PipeTransform {
  constructor(private filterService: FilterService) {}
  transform(payments: SupDocumentPayment[], terms: string = ''): SupDocumentPayment[] {
    if (!terms) {
      return payments;
    }
    return payments?.filter((payment: SupDocumentPayment) =>
      this.getUpperCasedTerms(terms).every((term: string) =>
        Object.entries(payment)
          .reduce((accum: string) => {
            const filterArray: string[] = [];
            this.filterService.pushValue(filterArray, payment.relatedPayment.sender.accNumber);
            this.filterService.pushValue(filterArray, payment.relatedPayment.sender.bankName);
            this.filterService.pushValue(filterArray, payment.relatedPayment.sender.name);

            this.filterService.pushValue(filterArray, payment.relatedPayment.recipient.accNumber);
            this.filterService.pushValue(filterArray, payment.relatedPayment.recipient.bankName);
            this.filterService.pushValue(filterArray, payment.relatedPayment.recipient.name);

            this.filterService.pushValue(filterArray, payment.relatedPayment.number);
            this.filterService.pushValue(filterArray, payment.relatedPayment.purpose);
            this.filterService.pushValue(filterArray, payment.relatedPayment.amount);
            this.filterService.pushValue(filterArray, payment.relatedPayment.currencyCode);

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
