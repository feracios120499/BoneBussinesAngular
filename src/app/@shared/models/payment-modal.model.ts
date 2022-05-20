import { PaymentStatuses } from '@modules/payments/models/payment-status.type';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DefaultProjectorFn, MemoizedSelector } from '@ngrx/store';
import { Observable } from 'rxjs';
import { StatusCode } from './enums/status-code.enum';

export interface PaymentModal {
  number: string;
  statusCode: PaymentStatuses;
  documentDate: Date;
  valueDate: Date;
  payedDate?: Date;
  sender: Partial<PaymentAccountModal>;
  recipient: Partial<PaymentAccountModal>;
  purpose: string;
  amount: number;
  amountString: string;
  currencyCode: string;

  actions: PaymentActionModal;
  isPaginationAvailable: boolean;
  next?: () => void;
  previous?: () => void;
}

export interface PaymentAccountModal {
  name: string;
  number: string;
  taxCode: string;
  countryName?: string;
  details?: string;
}

export interface PaymentActionModal {
  [key: string]: (modal: NgbActiveModal) => void;
}
