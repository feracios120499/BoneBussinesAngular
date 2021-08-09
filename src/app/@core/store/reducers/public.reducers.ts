import { createReducer, on } from '@ngrx/store';
import * as publicActions from '../actions/public.actions';
import { initialState } from '@stores/public.store';



export const publicReducer = createReducer(
    initialState,
    on(
        publicActions.loadBanksSuccess,
        (state, action) => ({ ...state, banks: action.banks })
    )
);
