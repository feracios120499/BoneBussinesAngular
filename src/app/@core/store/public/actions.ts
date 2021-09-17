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
        loadResourcesRequest,
        loadResourcesSuccess,
        loadResourcesFailure
    ] = createHTTPActions<void, Resources, string>('[PUBLIC] load resource');
}

