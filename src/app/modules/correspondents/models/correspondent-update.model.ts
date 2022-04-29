import { Correspondent } from './correspondent.model';

export interface CorrespondentUpdateModel
  extends Omit<Correspondent, 'lastUseDate' | 'accCurrencyId' | 'bank'> {}
