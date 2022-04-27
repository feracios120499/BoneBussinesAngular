import { Pipe, PipeTransform } from '@angular/core';

import { FilterService } from '@services/filter.service';
import { ReissueApplicationDetails } from '@models/cards/reissue-application-details.model';
import { UiReissuApplication } from '@models/cards/ui-reissue-application.model';

@Pipe({
  name: 'reissueApplicationsFilter',
})
export class ReissueApplicationsFilterPipe implements PipeTransform {
  constructor(private filterService: FilterService) {}

  transform(applications: UiReissuApplication[], terms: string = ''): UiReissuApplication[] {
    if (!terms) {
      return applications;
    }
    return applications.filter((application: UiReissuApplication) =>
      this.getUpperCasedTerms(terms).every((term: string) =>
        Object.entries(application)
          .reduce((accum: string) => {
            const filterArray: string[] = [];
            this.filterService.pushValue(filterArray, application.id);
            this.filterService.pushValue(filterArray, application.accountNumber);
            this.filterService.pushValue(filterArray, application.cardExpired);
            this.filterService.pushValue(filterArray, application.newExpiredDate);
            this.filterService.pushValue(filterArray, application.cardNumber);
            this.filterService.pushValue(filterArray, application.cardOwnerName);
            this.filterService.pushDateValue(filterArray, application.createDate);
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
