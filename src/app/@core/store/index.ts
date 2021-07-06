import { ActionReducerMap } from '@ngrx/store';
import { appReducers, AppState, APP_KEY } from '@reducers/app.reducers';
import { AUTH_KEY, authReducer, AuthState } from '@reducers/auth.reducers';
import { SETTINGS_KEY, settingsReducer, SettingsState } from '@reducers/settings.reducers';
import { USER_KEY, userReducer, UserState } from '@reducers/user.reducers';

export interface State {
  [SETTINGS_KEY]: SettingsState;
  [AUTH_KEY]: AuthState;
  [USER_KEY]: UserState;
  [APP_KEY]: AppState;
}

export const reducers: ActionReducerMap<State> = {
  [SETTINGS_KEY]: settingsReducer,
  [AUTH_KEY]: authReducer,
  [USER_KEY]: userReducer,
  [APP_KEY]: appReducers
};
