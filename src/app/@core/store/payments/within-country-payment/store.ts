import { PaymentForm } from '@models/payment-form.model';
import { PaymentCommon } from '@models/payments/payment-common.model';
import { ProgressForm } from 'src/app/@shared/types/progress-form.type';

export const WITHIN_COUNTRY_KEY = 'pay_within-country';


export interface WithinCountryPaymentState {
    progress: ProgressForm;
    payment?: PaymentForm;
    createdPayment?: PaymentCommon;
}

export const initialState: WithinCountryPaymentState = {
    progress: 'form'
};
