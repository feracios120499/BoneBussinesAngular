import { SupDocumentUploadModel } from './supdocument-upload.model';

export interface SupdocumentForm
  extends Pick<
    SupDocumentUploadModel,
    | 'Id'
    | 'CreatingDate'
    | 'EDRPO'
    | 'LastActiveDate'
    | 'Status'
    | 'FileName'
    | 'FileExt'
    | 'FileSize'
    | 'FileBody'
    | 'Description'
  > {}
