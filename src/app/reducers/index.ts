import { AUTH_KEY, AuthState, authReducer } from './auth';
import { SettingsState, SETTINGS_KEY, settingsReducer } from './settings';
import { environment } from './../../environments/environment';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';

export interface State {
    [SETTINGS_KEY]: SettingsState;
    [AUTH_KEY]: AuthState;
}

export const reducers: ActionReducerMap<State> = {
    [SETTINGS_KEY]: settingsReducer,
    [AUTH_KEY]: authReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
