
export interface Recipient {
    id: number,
    email: string,
    name: string
}

export interface SupDocumentUploadModel {
    FileName: string;
    FileExt: string;
    FileSize: number;
    FileBody: string;
    Description?: string;
};

export interface SupDocumentSendToBankModel{
    Recipients: Recipient[],
    Message: string
}

