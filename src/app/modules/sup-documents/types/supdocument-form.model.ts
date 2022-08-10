import { SupDocumentUploadModel } from './supdocument-upload.model';

export interface SupdocumentForm
  extends Pick<
    SupDocumentUploadModel,
    | 'FileName'
    | 'FileExt'
    | 'FileSize'
    | 'FileBody'
    | 'Description'
  > {}
