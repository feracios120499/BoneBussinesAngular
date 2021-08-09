import { BankModel } from 'src/app/@shared/models/bank.model';

export const PUBLIC_KEY = 'public';

export interface PublicState {
    banks: BankModel[];
}

export const initialState: PublicState = {
    banks: []
};
