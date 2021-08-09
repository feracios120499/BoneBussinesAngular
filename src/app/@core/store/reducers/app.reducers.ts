import { setGlobalLoader } from '@actions/app.actions';
import { createReducer, on } from '@ngrx/store';
import { initialState } from '@stores/app.store';



export const appReducers = createReducer(
    initialState,
    on(
        setGlobalLoader,
        (state, action) => ({ ...state, globalLoader: action.isLoading })
    )
);
