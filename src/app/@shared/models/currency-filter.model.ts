/* eslint-disable @typescript-eslint/naming-convention */
export interface CurrencyFilter {
    UAH: boolean;
    USD: boolean;
    EUR: boolean;
    OTHER: boolean;
    [key: string]: boolean;
}
