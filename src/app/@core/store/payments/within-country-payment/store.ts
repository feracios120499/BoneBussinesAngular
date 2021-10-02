import { PaymentForm } from '@models/payment-form.model';
import { ProgressForm } from 'src/app/@shared/types/progress-form.type';

export const WITHIN_COUNTRY_KEY = 'pay_within-country';


export interface WithinCountryPaymentState {
    progress: ProgressForm;
    payment?: PaymentForm;
}

export const initialState: WithinCountryPaymentState = {
    progress: 'form'
};
