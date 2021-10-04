import { StatusCode } from '@b1-types/status-code.type';


export interface PaymentStatus {
    id: string;
    number: string;
    status: StatusCode;
}
