import { StatusCode } from '@models/enums/status-code.enum';
import { PaymentForm } from '@models/payment-form.model';

export interface PaymentCommon extends PaymentForm {
    amountString: string;
    isNeedMySign: boolean;
    id: string;
    statusId: StatusCode;
}
