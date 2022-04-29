import { AccountModel } from '../../modules/accounts/models/account.model';

export interface SelectAccountsList {
  accounts: AccountModel[];
  isLoading: boolean;
}
