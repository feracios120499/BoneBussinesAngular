export interface Overdraft {
  bankId: string;
  customerId: number;
  nd: number;
  accountId: number;
  accountNumber: string;
  currencyCode: string;
  contractNumber: string;
  contractDate: Date;
  activeLimit: number;
  rate: number;
  maturityTDate: Date;
  usedLimit: number;
  accruedInterest: number;
  commission: number;
  unusedLimit: number;
  overUsedLimit: number;
  overAccruedInterest: number;
  overCommission: number;
}
