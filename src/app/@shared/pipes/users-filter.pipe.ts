import { Pipe, PipeTransform } from '@angular/core';

import { FilterService } from '@services/filter.service';
import { User } from '@models/users/user.model';

@Pipe({
  name: 'usersFilter',
})
export class UsersFilterPipe implements PipeTransform {
  constructor(private filterService: FilterService) {}

  transform(users: User[], terms: string = ''): User[] {
    if (!terms) {
      return users;
    }
    return users.filter((user: User) =>
      this.getUpperCasedTerms(terms).every((term: string) =>
        Object.entries(user)
          .reduce((accum: string) => {
            const filterArray: string[] = [];
            this.filterService.pushValue(filterArray, user.displayName);
            this.filterService.pushValue(filterArray, user.email);
            this.filterService.pushValue(filterArray, user.phoneNumber);
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
