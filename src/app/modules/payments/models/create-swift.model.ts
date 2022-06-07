import { PaymentStatuses } from './payment-status.type';
import { SwiftDetails } from './swift-details.model';

export interface CreateSwiftModel extends SwiftDetails {
  status: PaymentStatuses;
  saveAsTemplate: boolean;
}
