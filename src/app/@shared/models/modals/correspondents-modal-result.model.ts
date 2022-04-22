import { Correspondent } from '@models/correspondents/correspondent.model';

export interface CorrespondentsModalResult
  extends Pick<Correspondent, 'name' | 'accNumber' | 'taxCode'> {}
