import { CorrespondentModalResult } from './correspondent-modal-result.model';
import { Correspondent } from './correspondent.model';

export interface CorrespondentModalConfig {
  editingCorrespondent?: Correspondent;
  callback: (data: CorrespondentModalResult) => void;
}
