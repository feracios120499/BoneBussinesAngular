import { SupDocumentStatus } from '@b1-types/sup-document-status.type';

export interface SupDocumentUploadModel {
    CreatingDate: string;
    EDRPO: string;
    FileName: string;
    FileExt: string;
    FileSize: number;
    FileBody: string;
    Id: number;
    Description?: string;
    LastActiveDate: string;
    Status: SupDocumentStatus
}
