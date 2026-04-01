import { RecursivePartial } from '@b1-types/recursive-partial.type';
import { PaymentForm } from '@models/payment-form.model';
import { PaymentModal } from '@models/payment-modal.model';
import { SwiftModal } from '@models/swift-modal.model';
import { PaymentConvertModal } from '@modules/sup-documents/modules/supdocument/types/payment-convert.modal.model';
import { DefaultProjectorFn, MemoizedSelector } from '@ngrx/store';

export const SHARED_KEY = 'shared';

export interface SharedState {
  currentPayment: CurrentPayment;
  createPayment?: CreatePayment;
  createPartialPayment?: CreatePartialPayment;
}

export interface CurrentPayment {
  payment?: Partial<PaymentModal> | RecursivePartial<SwiftModal> | Partial<PaymentConvertModal>;
  loader?: MemoizedSelector<object, boolean, DefaultProjectorFn<boolean>>;
}

export interface CreatePayment {
  payment: PaymentForm;
}

export interface CreatePartialPayment {
  payment: Partial<PaymentForm>;
}

export const initialState: SharedState = {
  currentPayment: {},
};
