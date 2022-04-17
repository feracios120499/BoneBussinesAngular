import { Correspondent } from './correspondent.model';

export interface CorrespondentForm
  extends Pick<
    Correspondent,
    /* 'accCurrencyCode' |  */
    'accNumber' | 'bankCode' | 'bankName' | 'name' | 'taxCode'
  > {}
