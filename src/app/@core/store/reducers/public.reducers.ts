import { createReducer, on } from '@ngrx/store';
import { BankModel } from 'src/app/@shared/models/bank.model';
import * as publicActions from '../actions/public.actions';

export const PUBLIC_KEY = 'PUBLIC';

export interface PublicState {
    banks: BankModel[];
}

export const initialState: PublicState = {
    banks: []
};

export const publicReducer = createReducer(
    initialState,
    on(
        publicActions.loadBanksSuccess,
        (state, action) => ({ ...state, banks: action.banks })
    )
);
