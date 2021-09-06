import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';
import { appReducers } from '@store/app/reducer';
import { APP_KEY, AppState } from '@store/app/store';
import { authReducer } from '@store/auth/reducer';
import { AUTH_KEY, AuthState } from '@store/auth/store';
import { menuReducers } from '@store/menu/reducer';
import { MENU_KEY, MenuState } from '@store/menu/store';
import { publicReducer } from '@store/public/reducer';
import { PUBLIC_KEY, PublicState } from '@store/public/store';
import { settingsReducer } from '@store/settings/reducer';
import { SETTINGS_KEY, SettingsState } from '@store/settings/store';
import { userReducer } from '@store/user/reducer';
import { USER_KEY, UserState } from '@store/user/store';
import { AcctState, ACCT_KEY } from './acct/store';
import { acctReducer } from './acct/reducer';
import { SharedState, SHARED_KEY } from './shared/store';
import { sharedReducer } from './shared/reducer';



export interface State {
  [SETTINGS_KEY]: SettingsState;
  [AUTH_KEY]: AuthState;
  [USER_KEY]: UserState;
  [APP_KEY]: AppState;
  [ACCT_KEY]: AcctState;
  [PUBLIC_KEY]: PublicState;
  [MENU_KEY]: MenuState;
  [SHARED_KEY]: SharedState;
  router: RouterReducerState;
}



export const reducers: ActionReducerMap<State> = {
  [SETTINGS_KEY]: settingsReducer,
  [AUTH_KEY]: authReducer,
  [USER_KEY]: userReducer,
  [APP_KEY]: appReducers,
  [ACCT_KEY]: acctReducer,
  [PUBLIC_KEY]: publicReducer,
  [MENU_KEY]: menuReducers,
  [SHARED_KEY]: sharedReducer,
  router: routerReducer
};
