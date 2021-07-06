import { setGlobalLoader } from '@actions/app.actions';
import { createReducer, on } from '@ngrx/store';

export const APP_KEY = 'app';

export interface AppState {
    globalLoader: boolean;
}

export const initialState: AppState = {
    globalLoader: false
};

export const appReducers = createReducer(
    initialState,
    on(
        setGlobalLoader,
        (state, action) => ({ ...state, globalLoader: action.isLoading })
    )
);
