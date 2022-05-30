export interface Deposit {
  id: number;
  currencyId: number;
  currencyCode: string;
  customerId: number;
  typeId: number;
  typeName: string;
  rate: number;
  accToReplenish: {
    bankCode: string;
    bankName: string | null;
    taxCode: string;
    name: string;
    accNumber: string;
    accId: number | null;
    accCurrencyCode: string;
    accCurrencyId: number | null;
  };
  replenishDefaultPurpose: string | null;
  interestAccrual: number | null;
  interestPaid: number | null;
  transferBankId: string;
  bankId: string;
  transferAccountNumber: string;
  transferAccountName: string;
  transferCustomerCode: string;
  balance: number;
  beginDate: Date;
  endDate: Date;
  termAdd: Date | null;
  termAddDate: Date | null;
  minAddSum: number | null;
  isCapitalization: boolean;
  maxProlongations: number;
  isMoneyBox: boolean;
  isProlongation: boolean;
  comments: string | null;
  isReplenished: boolean;
}
