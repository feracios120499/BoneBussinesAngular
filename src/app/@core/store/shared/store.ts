import { PaymentModal } from '@models/payment-modal.model';
import { createSelector, DefaultProjectorFn, MemoizedSelector } from '@ngrx/store';
import { of } from 'rxjs';
import { SharedSelectors } from './selectors';

export const SHARED_KEY = 'shared';

export interface SharedState {
    currentPayment: CurrentPayment;
}

export interface CurrentPayment {
    payment?: Partial<PaymentModal>;
    loader?: MemoizedSelector<object, boolean, DefaultProjectorFn<boolean>>;
}

export const initialState: SharedState = {
    currentPayment: {

    }
};
