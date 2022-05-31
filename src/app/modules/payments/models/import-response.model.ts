import { PaymentDetails } from './payment-details.model';

export interface ImportResponse {
  responseExcel: string;
  responses: ImportResponsRow[];
}

export interface ImportError {
  [key: string]: string;
}

export interface ImportResponsRow {
  error: ImportError;
  model: PaymentDetails;
  status: string;
}
