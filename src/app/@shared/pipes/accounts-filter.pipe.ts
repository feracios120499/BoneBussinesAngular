import { Pipe, PipeTransform } from '@angular/core';
import { FilterService } from '@services/filter.service';
import { AccountModel } from '../models/account.model';
import { FilterCurrency, FilterCurrencyType } from '../models/filter.model';

@Pipe({ name: 'accountsFilter' })
export class AccountFilterPipe implements PipeTransform {

    constructor(private filterService: FilterService) {
    }

    transform(accounts?: AccountModel[], filter?: string, filterCurrency?: FilterCurrency): AccountModel[] {
        debugger;
        if (!accounts) {
            return new Array<AccountModel>();
        }

        if (!filter && (!filterCurrency || !filterCurrency.currencies || filterCurrency.currencies.length === 0)) {
            return accounts;
        }

        if (!!filterCurrency && !!filterCurrency.currencies && filterCurrency.currencies.length !== 0) {
            accounts = filterCurrency.type === FilterCurrencyType.Include ?
                accounts.filter(p => filterCurrency.currencies.indexOf(p.CurrencyCode) >= 0) :
                accounts.filter(p => filterCurrency.currencies.indexOf(p.CurrencyCode) === -1);
        }

        if (!!filter) {
            return accounts.filter(account => {
                const filterArray = this.getFilterArray(account);
                if (filterArray.some(p => p.indexOf(filter.toUpperCase()) >= 0)) {
                    return true;
                }
                return false;
            });
        }
        return accounts;
    }

    private getFilterArray(account: AccountModel): string[] {
        const filterArray = new Array<string>();

        this.filterService.pushValue(filterArray, account.CurrencyCode);
        this.filterService.pushValue(filterArray, account.Name);
        this.filterService.pushValue(filterArray, account.Number);
        this.filterService.pushValue(filterArray, account.BankId);

        this.filterService.pushDateValue(filterArray, account.LastActive);
        this.filterService.pushDateValue(filterArray, account.OpeningDate);
        this.filterService.pushDateValue(filterArray, account.ClosingDate);

        this.filterService.pushMoneyValue(filterArray, account.Balance);
        this.filterService.pushMoneyValue(filterArray, account.PlannedBalance);
        this.filterService.pushMoneyValue(filterArray, account.CreditTurns);
        this.filterService.pushMoneyValue(filterArray, account.DebitTurns);

        return filterArray;
    }


}
