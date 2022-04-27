import { DocumentHistory } from './document-history.model';

export interface HistoryModalConfig {
  title: string;
  subtitle: string;
  id?: string;
  number: string;
  createDate: Date;
  statusPrefix: string;
  history: DocumentHistory[];
}
