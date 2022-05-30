import { Deposit } from '../models/deposit.model';
import { DepositsLoading } from '../models/deposits-loading.type';

export const DEPOSITS_KEY = 'deposits';

export interface DepositsState {
  deposits: Deposit[];
  filterTerm: string;
  loadings: DepositsLoading[];
}

export const initialState: DepositsState = {
  deposits: [],
  filterTerm: '',
  loadings: [],
};
