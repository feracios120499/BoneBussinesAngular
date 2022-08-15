import { Currency } from '@models/currency.model';
import { PaymentForm } from '@models/payment-form.model';
import { CreatePaymentModel } from '@models/payments/create-payment.model';
import { PaymentCommon } from '@models/payments/payment-common.model';
import { SwiftForm } from '@models/payments/swift-form.model';
import { SwiftBank } from '@models/swift-bank.model';
import { createAction, props } from '@ngrx/store';
import { createHTTPActions } from '@store/shared';
import { number } from 'ngrx-forms/validation';
import { ProgressForm } from 'src/app/@shared/types/progress-form.type';

import { PAY_FORMS_KEY } from './store';

export namespace PayFormsActions {
  export const setProgress = createAction(`[${PAY_FORMS_KEY}] set progress`, props<{ progress: ProgressForm }>());

  export const setPayment = createAction(`[${PAY_FORMS_KEY}] set payment`, props<{ payment: PaymentForm }>());

  export const setSwift = createAction(`[${PAY_FORMS_KEY}] set swift`, props<{ swift: SwiftForm }>());

  export const setSwiftCurrency = createAction(
    `[${PAY_FORMS_KEY}] set swift currency`,
    props<{ currency: Currency }>()
  );

  export const setCreatedPayment = createAction(
    `[${PAY_FORMS_KEY}] set created payment`,
    props<{ payment: PaymentCommon }>()
  );

  export const [createWithinCountryRequest, createWithinCountrySuccess, createWithinCountryFailure] = createHTTPActions<
    CreatePaymentModel,
    PaymentCommon,
    string
  >(`[${PAY_FORMS_KEY}] create within country`);

  export const [createMyAccountsRequest, createMyAccountsSuccess, createMyAccountsFailure] = createHTTPActions<
    CreatePaymentModel,
    PaymentCommon,
    string
  >(`[${PAY_FORMS_KEY}] create my accounts`);

  export const createSignAndToBank = createAction(`[${PAY_FORMS_KEY}] create sign and to bank`);

  export const [loadAmountStringRequest, loadAmountStringSuccess, loadAmountStringFailure] = createHTTPActions<
    { amount: number; currencyCode: string },
    string,
    string
  >(`[${PAY_FORMS_KEY}] load amount string`);

  export const searchSwiftBanks = createAction(`[${PAY_FORMS_KEY}] search swift banks`, props<{ bic: string }>());
  export const setSwiftBanks = createAction(`[${PAY_FORMS_KEY}] set swift banks`, props<{ banks?: SwiftBank[] }>());

  // export const setSupDocuments = createAction(`[${PAY_FORMS_KEY}] set sup documents`,props<{document}>);

  export const init = createAction(`[${PAY_FORMS_KEY}] init`);

  export const destroy = createAction(`[${PAY_FORMS_KEY}] destroy`);
}
