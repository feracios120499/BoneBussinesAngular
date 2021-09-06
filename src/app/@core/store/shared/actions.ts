import { PaymentModal } from '@models/payment-modal.model';
import { StatementModal } from '@models/statement-modal.model';
import { createAction, DefaultProjectorFn, MemoizedSelector, props } from '@ngrx/store';

export namespace SharedActions {
    export const showPayment = createAction('[SHARED] show payment', props<{ payment: Partial<PaymentModal> }>());
    export const setPayment = createAction('[SHARED] set payment', props<{ payment: Partial<PaymentModal> }>());
    export const setPaymentLoader = createAction(
        '[SHARED] set payment loader',
        props<{ loader: MemoizedSelector<object, boolean, DefaultProjectorFn<boolean>> }>()
    );


    export const showStatement = createAction('[SHARED] show statement', props<{ config: StatementModal }>());
}


