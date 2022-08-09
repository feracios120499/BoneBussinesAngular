import { SupdocumentModalResult } from './supdocument-modal-result.model';

export interface SupdocumentModalConfig {
  callback: (data: SupdocumentModalResult) => void;
}
