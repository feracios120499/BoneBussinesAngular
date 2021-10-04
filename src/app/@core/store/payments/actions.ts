import { PaymentCommon } from '@models/payments/payment-common.model';
import { createHTTPActions } from '@store/shared';

export namespace PayActions {

    export const [loadPaymentRequest, loadPaymentSuccess, loadPaymentFailure] = createHTTPActions<string, PaymentCommon, string>('[PAY] load payment');

}
