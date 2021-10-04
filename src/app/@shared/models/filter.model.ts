export interface Filter {
    filter: string | undefined;
}

export type FilterCurrencyType = 'include' | 'exclude';

export interface FilterCurrency {
    type: FilterCurrencyType;
    currencies: string[];
}
