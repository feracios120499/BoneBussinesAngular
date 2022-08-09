import { SupDocument } from '@models/sup-documents/sup-document.model';

export interface SupdocumentForm
  extends Pick<
    SupDocument,
    | 'creatingDate'
    | 'lastActiveDate'
    | 'fileName'
    | 'fileExt'
    | 'fileSize'
    | 'description'
    | 'status'
  > {}
