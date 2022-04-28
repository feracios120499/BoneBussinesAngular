import { Correspondent } from './correspondent.model';

export interface CorrespondentForm
  extends Pick<
    Correspondent,
    | 'name'
    | 'taxCode'
    | 'accNumber'
    | 'accCurrencyCode'
    | 'bankCode'
    | 'bankName'
  > {}
