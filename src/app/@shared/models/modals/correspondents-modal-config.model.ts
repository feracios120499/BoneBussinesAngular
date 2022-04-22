import { CorrespondentsModalResult } from './correspondents-modal-result.model';

export interface CorrespondentsModalConfig {
  callback: (data: CorrespondentsModalResult) => void;
}
