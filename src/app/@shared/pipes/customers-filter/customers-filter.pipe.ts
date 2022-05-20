import { Pipe, PipeTransform } from '@angular/core';

import { FilterService } from '@services/filter.service';
import { Customer } from '@models/profile.model';

@Pipe({
  name: 'customersFilter',
})
export class CustomersFilterPipe implements PipeTransform {
  constructor(private filterService: FilterService) {}

  transform(customers: Customer[], terms: string = ''): Customer[] {
    if (!terms) {
      return customers;
    }
    return customers.filter((customer: Customer) =>
      this.getUpperCasedTerms(terms).every((term: string) =>
        Object.entries(customer)
          .reduce((accum: string) => {
            const filterArray: string[] = [];
            this.filterService.pushValue(filterArray, customer.name);
            this.filterService.pushValue(filterArray, customer.taxCode);
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
