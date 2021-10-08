import { PaymentForm } from '@models/payment-form.model';
import { CreateWithinCountryModel } from '@models/payments/create-within-country.modal';
import { PaymentCommon } from '@models/payments/payment-common.model';
import { createAction, props } from '@ngrx/store';
import { createHTTPActions } from '@store/shared';
import { ProgressForm } from 'src/app/@shared/types/progress-form.type';

import { WITHIN_COUNTRY_KEY } from './store';

export namespace WithinCountryActions {


    export const setProgress = createAction(`[${WITHIN_COUNTRY_KEY}] set progress`, props<{ progress: ProgressForm }>());

    export const setPayment = createAction(`[${WITHIN_COUNTRY_KEY}] set payment`, props<{ payment: PaymentForm }>());

    export const setCreatedPayment = createAction(`[${WITHIN_COUNTRY_KEY}] set created payment`, props<{ payment: PaymentCommon }>());

    export const [
        createRequest,
        createSuccess,
        createFailure
    ] = createHTTPActions<CreateWithinCountryModel, string, string>(`[${WITHIN_COUNTRY_KEY}] create`);
}
