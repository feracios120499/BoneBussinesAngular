import { Correspondent } from '@modules/correspondents/models/correspondent.model';

export interface CorrespondentsModalResult extends Pick<Correspondent, 'name' | 'accNumber' | 'taxCode'> {}
