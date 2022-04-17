export interface BankModel {
  bankCode: string;
  name: string;
  closingDate?: Date;
  shortName: string;
  countryCode: string;
  isBlocked: boolean;
}
