import { createReducer, on } from '@ngrx/store';

import { PublicActions } from './actions';
import { initialState } from './store';



export const publicReducer = createReducer(
    initialState,
    on(
        PublicActions.loadBanksSuccess,
        (state, action) => ({ ...state, banks: action.banks })
    )
);
