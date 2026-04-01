import { SupDocumentStatus } from '@b1-types/sup-document-status.type';

export interface SupDocument {
  id: number;
  creatingDate: Date;
  lastActiveDate: Date;
  fileName: string;
  fileExt: string;
  fileSize: number;
  description?: string;
  status: SupDocumentStatus;
}

export interface UiSupDocumentListItem extends SupDocument {
  selected: boolean;
}
