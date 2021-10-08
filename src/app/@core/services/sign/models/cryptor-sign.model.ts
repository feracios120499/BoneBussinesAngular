import { CryptorResponse } from './cryptor-response.model';

export interface CryptorSign extends CryptorResponse {
    sign: string;
}
