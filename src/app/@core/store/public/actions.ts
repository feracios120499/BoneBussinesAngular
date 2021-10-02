import { PaymentType } from '@models/payment-type.model';
import { Resources } from '@models/resources.model';
import { createHTTPActions } from '@store/shared';
import { BankModel } from 'src/app/@shared/models/bank.model';

export namespace PublicActions {

    export const [
        loadBanksRequest,
        loadBanksSuccess,
        loadBanksFailure
    ] = createHTTPActions<void, BankModel[], string>('[PUBLIC] load banks');

    export const [
        loadBankRequest,
        loadBankSuccess,
        loadBankFailure
    ] = createHTTPActions<string, BankModel, string>('[PUBLIC] load bank');

    export const [
        loadResourcesRequest,
        loadResourcesSuccess,
        loadResourcesFailure
    ] = createHTTPActions<void, Resources, string>('[PUBLIC] load resource');

    export const [
        loadPayTypesReuqest,
        loadPayTypesSuccess,
        loadPayTypesFailure
    ] = createHTTPActions<void, PaymentType[], string>('[PUBLIC] load pay types');
}

