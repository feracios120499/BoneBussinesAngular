import { PaymentCommon } from '@models/payments/payment-common.model';
import { SignSaveResponse } from '@models/sign-response.model';
import { createHTTPActions } from '@store/shared';

export namespace PayActions {

    export const [
        loadPaymentRequest,
        loadPaymentSuccess,
        loadPaymentFailure] = createHTTPActions<string, PaymentCommon, string>('[PAY] load payment');

    export const [
        signPayment,
        signPaymentSuccess,
        signPaymentFailure] = createHTTPActions<string, SignSaveResponse, string>('[PAY] sign payment');

    export const [
        onSignPayment,
        onSignPaymentSuccess,
        onSignPaymentFailure] = createHTTPActions<string, void, string>('[PAY] on sign payment');

    export const [
        toBankPayment,
        toBankPaymentSuccess,
        toBankPaymentFailure] = createHTTPActions<string, void, string>('[PAY] to bank payment');
}
