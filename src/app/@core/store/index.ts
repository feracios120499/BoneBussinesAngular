import { ActionReducerMap } from '@ngrx/store';
import { AuthState, AUTH_KEY } from '@reducers/auth.reducers';
import { settingsReducer, SettingsState, SETTINGS_KEY } from '@reducers/settings.reducers';
import { authReducer } from '@reducers/auth.reducers';

export interface State {
    [SETTINGS_KEY]: SettingsState;
    [AUTH_KEY]: AuthState;
}

export const reducers: ActionReducerMap<State> = {
    [SETTINGS_KEY]: settingsReducer,
    [AUTH_KEY]: authReducer
};
