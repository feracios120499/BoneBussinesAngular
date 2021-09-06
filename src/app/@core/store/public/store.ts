import { BankModel } from '@models/bank.model';

export const PUBLIC_KEY = 'public';

export interface PublicState {
    banks: BankModel[];
}

export const initialState: PublicState = {
    banks: []
};
