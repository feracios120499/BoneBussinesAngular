export interface ItemSum {
  count: number;
  sum: CurrencySum;
}

export interface CurrencySum {
  [key: string]: number;
}
