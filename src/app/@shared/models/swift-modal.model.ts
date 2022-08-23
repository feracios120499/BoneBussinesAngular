import { ImportError } from '@modules/payments/models/import-response.model';
import { SwiftDetails } from '@modules/payments/models/swift-details.model';
import { SupDocumentAttach } from '@modules/sup-documents/modules/supdocument/types/payment-convert.modal.model';
import { PaymentActionModal } from './payment-modal.model';

export interface SwiftModal extends SwiftDetails {
  actions: PaymentActionModal;
  isPaginationAvailable: boolean;
  next?: () => void;
  previous?: () => void;
  errors?: ImportError;

  attachedSupDocs?: SupDocumentAttach[];
}
