import { SignProvider } from '@b1-types/sign-providers.type';

export interface SignError {
    message: string;
    stackTrace?: string;
}

export interface SignSaveResponse {
    id: string;
    number: string;
    isSuccess: boolean;
    error?: SignError;
}

export interface SignResponse extends SignSaveResponse {

    buffer: string;
    signature: string;
    signProviderType: SignProvider;
}
