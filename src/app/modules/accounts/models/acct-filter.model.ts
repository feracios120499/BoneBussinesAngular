import { CurrencyFilter } from '@models/currency-filter.model';
import { Filter } from '@models/filter.model';

export interface AcctFilter extends Filter {
    currency: CurrencyFilter;
}
