import { Correspondent } from '@models/correspondents/correspondent.model';
import { CorrespondentModalResult } from './correspondent-modal-result.model';

export interface CorrespondentModalConfig {
  editingCorrespondent?: Correspondent;
  callback: (data: CorrespondentModalResult) => void;
}
