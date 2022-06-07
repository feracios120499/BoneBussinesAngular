import { ImportStatus } from './import-status.type';
import { PaymentDetails } from './payment-details.model';
import { SwiftDetails } from './swift-details.model';

export interface ImportResponse {
  responseExcel: string;
  responses: ImportResponsRow[];
}

export interface ImportError {
  [key: string]: string;
}

export interface ImportResponsRow {
  error?: ImportError;
  model: PaymentDetails | SwiftDetails;
  status: ImportStatus;
}
