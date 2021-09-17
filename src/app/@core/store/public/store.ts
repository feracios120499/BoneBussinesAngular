import { BankModel } from '@models/bank.model';
import { Resources } from '@models/resources.model';

export const PUBLIC_KEY = 'public';

export interface PublicState {
    banks: BankModel[];
    resources?: Resources;
}

export const initialState: PublicState = {
    banks: []
};
