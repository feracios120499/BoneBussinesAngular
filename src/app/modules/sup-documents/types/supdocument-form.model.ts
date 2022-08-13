import { SupDocumentSendToBankModel, SupDocumentUploadModel } from './supdocument-upload.model';

export interface SupdocumentForm
  extends Pick<
    SupDocumentUploadModel,
    | 'FileName'
    | 'FileExt'
    | 'FileSize'
    | 'FileBody'
    | 'Description'
  > {}


  export interface SupdocumentSendForm extends Pick<
    SupDocumentSendToBankModel,
    | 'Recipients'
    | 'Message'
  >{}

