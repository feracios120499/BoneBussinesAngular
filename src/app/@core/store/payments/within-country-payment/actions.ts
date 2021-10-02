import { PaymentForm } from '@models/payment-form.model';
import { createAction, props } from '@ngrx/store';
import { ProgressForm } from 'src/app/@shared/types/progress-form.type';

import { WITHIN_COUNTRY_KEY } from './store';

export namespace WithinCountryActions {


    export const setProgress = createAction(`[${WITHIN_COUNTRY_KEY}] set progress`, props<{ progress: ProgressForm }>());

    export const setPayment = createAction(`[${WITHIN_COUNTRY_KEY}] set payment`, props<{ payment: PaymentForm }>());
}
