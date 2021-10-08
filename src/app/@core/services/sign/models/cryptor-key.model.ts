import { CryptorResponse } from './cryptor-response.model';

export interface CryptorKey {
    name: string;
    id: string;
    authorityKey: string;
    subjectSN: string;
    certSN: string;
    notBefore: string;
    notAfter: string;
}

export interface CryptorKeysResponse extends CryptorResponse {
    keys: CryptorKey[];
}
