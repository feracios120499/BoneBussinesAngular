import { AccountModel } from './account.model';

export interface SelectAccountsList {
    accounts: AccountModel[];
    isLoading: boolean;
}
