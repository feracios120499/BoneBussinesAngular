import { SmsStatus } from '@b1-types/sms-status.type';

export interface CardSmsStatus {
    phoneNumber: string;
    status: SmsStatus;
}
