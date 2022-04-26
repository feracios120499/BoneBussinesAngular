import { Pipe, PipeTransform } from '@angular/core';
import { AccountModel } from '@models/account.model';
import { FilterCurrency } from '@models/filter.model';
import { FilterService } from '@services/filter.service';

@Pipe({ name: 'accountsFilter' })
export class AccountsFilterPipe implements PipeTransform {
  constructor(private filterService: FilterService) {}

  transform(
    accounts?: AccountModel[],
    filter?: string,
    filterCurrency?: FilterCurrency
  ): AccountModel[] {
    if (!accounts) {
      return [];
    }

    if (
      !filter &&
      (!filterCurrency ||
        !filterCurrency.currencies ||
        filterCurrency.currencies.length === 0)
    ) {
      return accounts;
    }

    if (
      !!filterCurrency &&
      !!filterCurrency.currencies &&
      filterCurrency.currencies.length !== 0
    ) {
      accounts =
        filterCurrency.type === 'include'
          ? accounts.filter(
              (p) => filterCurrency.currencies.indexOf(p.currencyCode) >= 0
            )
          : accounts.filter(
              (p) => filterCurrency.currencies.indexOf(p.currencyCode) === -1
            );
    }

    if (!!filter) {
      return accounts.filter((account) => {
        const filterArray = this.getFilterArray(account);
        if (filterArray.some((p) => p.indexOf(filter.toUpperCase()) >= 0)) {
          return true;
        }
        return false;
      });
    }
    return accounts;
  }

  private getFilterArray(account: AccountModel): string[] {
    const filterArray: string[] = [];

    this.filterService.pushValue(filterArray, account.currencyCode);
    this.filterService.pushValue(filterArray, account.name);
    this.filterService.pushValue(filterArray, account.number);
    this.filterService.pushValue(filterArray, account.bankId);

    this.filterService.pushDateValue(filterArray, account.lastActive);
    this.filterService.pushDateValue(filterArray, account.openingDate);
    this.filterService.pushDateValue(filterArray, account.closingDate);

    this.filterService.pushMoneyValue(filterArray, account.balance);
    this.filterService.pushMoneyValue(filterArray, account.plannedBalance);
    this.filterService.pushMoneyValue(filterArray, account.creditTurns);
    this.filterService.pushMoneyValue(filterArray, account.debitTurns);

    return filterArray;
  }
}
