import { CryptorResponse } from './cryptor-response.model';

export interface CryptorToken {
    moduleName: string;
    name: string;
    tokenId: string;
}

export interface CryptorTokensResponse extends CryptorResponse {
    tokens: CryptorToken[];
}
