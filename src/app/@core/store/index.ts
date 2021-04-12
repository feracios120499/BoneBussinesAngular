import { ActionReducerMap } from '@ngrx/store';
import { AUTH_KEY, authReducer, AuthState } from '@reducers/auth.reducers';
import { SETTINGS_KEY, settingsReducer, SettingsState } from '@reducers/settings.reducers';

export interface State {
  [SETTINGS_KEY]: SettingsState;
  [AUTH_KEY]: AuthState;
}

export const reducers: ActionReducerMap<State> = {
  [SETTINGS_KEY]: settingsReducer,
  [AUTH_KEY]: authReducer
};
