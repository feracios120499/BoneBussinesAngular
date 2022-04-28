import { DocumentSign } from './document-sign.model';

export interface SignModalConfig {
  title: string;
  subtitle: string;
  id?: string;
  createDate: Date;
  number: string;
  signes: DocumentSign[];
}
