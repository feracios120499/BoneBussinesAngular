import { PaymentForm } from '@models/payment-form.model';
import { PaymentModal } from '@models/payment-modal.model';
import { DefaultProjectorFn, MemoizedSelector } from '@ngrx/store';

export const SHARED_KEY = 'shared';

export interface SharedState {
    currentPayment: CurrentPayment;
    createPayment?: CreatePayment;
}

export interface CurrentPayment {
    payment?: Partial<PaymentModal>;
    loader?: MemoizedSelector<object, boolean, DefaultProjectorFn<boolean>>;
}

export interface CreatePayment {
    payment: PaymentForm;
}


export const initialState: SharedState = {
    currentPayment: {

    }
};
