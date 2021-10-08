import { CreateWithinCountryModel } from './create-within-country.modal';

export interface PaymentCommon extends CreateWithinCountryModel {
    amountString: string;
    isNeedMySign: boolean;
    id: string;
}
