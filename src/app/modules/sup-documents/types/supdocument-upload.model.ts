
export interface SupDocumentUploadModel {
    FileName: string;
    FileExt: string;
    FileSize: number;
    FileBody: string;
    Description?: string;
};

export interface SupDocumentSendToBankModel{
    Recipients: string[],
    Message: string
}

