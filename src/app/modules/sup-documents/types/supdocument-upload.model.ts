
export interface Recipient {
    Id: number,
    Email: string,
    Name: string
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

