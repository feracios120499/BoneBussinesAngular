import { PaymentLoading } from './models/payment-loading.type';


export const PAY_KEY = 'pay';

export interface PayState {
    loadings: PaymentLoading[];
}

export const payInitialState: PayState = {
    loadings: [],
};
