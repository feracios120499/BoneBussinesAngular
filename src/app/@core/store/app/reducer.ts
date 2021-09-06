
import { createReducer, on } from '@ngrx/store';
import { AppActions } from './actions';
import { initialState } from './store';



export const appReducers = createReducer(
    initialState,
    on(
        AppActions.setGlobalLoader,
        (state, action) => ({ ...state, globalLoader: action.isLoading })
    )
);
