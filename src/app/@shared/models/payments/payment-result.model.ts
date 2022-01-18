import { PaymentActions } from '@b1-types/payment-actions.type';

export interface PaymentResult {
    title: string;
    statusName: string;
    image: string;
    class: string;
    action?: PaymentActions;
}
