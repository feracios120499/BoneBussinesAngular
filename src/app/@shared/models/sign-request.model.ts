import { SignProvider } from '@b1-types/sign-providers.type';

export interface SignRequest {
    id: string;
    buffer: string;
    keyId?: string;
    signature: string;
    signProviderType: SignProvider;
}
