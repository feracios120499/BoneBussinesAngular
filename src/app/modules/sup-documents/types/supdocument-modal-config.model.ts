import { SupdocumentModalResult, SupdocumentSendModalResult } from './supdocument-modal-result.model';

export interface SupdocumentModalConfig {
  callback: (data: SupdocumentModalResult) => void;
}

export interface SupdocumentSendModalConfig {
  callback: (data: SupdocumentSendModalResult) => void;
}
