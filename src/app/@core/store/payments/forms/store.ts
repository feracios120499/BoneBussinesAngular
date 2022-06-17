import { PaymentForm } from '@models/payment-form.model';
import { PaymentCommon } from '@models/payments/payment-common.model';
import { SwiftBank } from '@models/swift-bank.model';
import { ProgressForm } from 'src/app/@shared/types/progress-form.type';

export const PAY_FORMS_KEY = 'pay_forms';

export interface PayFormsState {
  progress: ProgressForm;
  payment?: PaymentForm;
  createdPayment?: PaymentCommon;
  isLoading: boolean;
  amountString: string;
  swiftBanks?: SwiftBank[];
}

export const initialState: PayFormsState = {
  progress: 'form',
  isLoading: false,
  amountString: '',
};
