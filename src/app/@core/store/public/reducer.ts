import { createReducer, on } from '@ngrx/store';

import { PublicActions } from './actions';
import { initialState } from './store';



export const publicReducer = createReducer(
    initialState,
    on(
        PublicActions.loadBanksSuccess,
        (state, action) => ({ ...state, banks: action.payload })
    ),
    on(
        PublicActions.loadBankSuccess,
        (state, action) => ({ ...state, banks: [...state.banks, action.payload] })
    ),
    on(
        PublicActions.loadResourcesSuccess,
        (state, action) => ({ ...state, resources: action.payload })
    ),
    on(
        PublicActions.loadPayTypesSuccess,
        (state, action) => ({ ...state, payTypes: action.payload })
    )
);
