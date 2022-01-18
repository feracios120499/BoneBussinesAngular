import { SupDocumentStatus } from '@b1-types/sup-document-status.type';

export interface SupDocument {
    id: string;
    creatingDate: Date;
    lastActiveDate: Date;
    fileName: string;
    fileExt: string;
    fileSize: number;
    description?: string;
    status: SupDocumentStatus;
}
