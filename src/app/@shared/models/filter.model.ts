export interface Filter {
    filter: string | undefined;
}

export enum FilterCurrencyType {
    Include = 'INCLUDE',
    Exclude = 'EXCLUDE'
}
export interface FilterCurrency {
    type: FilterCurrencyType;
    currencies: string[];
}
