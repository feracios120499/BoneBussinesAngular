import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';
import { acctReducers } from '@reducers/acct.reducers';
import { appReducers } from '@reducers/app.reducers';
import { authReducer } from '@reducers/auth.reducers';
import { menuReducers } from '@reducers/menu.reducers';
import { publicReducer } from '@reducers/public.reducers';
import { settingsReducer } from '@reducers/settings.reducers';
import { userReducer } from '@reducers/user.reducers';
import { MenuState, MENU_KEY } from '@stores/menu.store';
import { AcctState, ACCT_KEY } from '@stores/acct.store';
import { AppState, APP_KEY } from '@stores/app.store';
import { AuthState, AUTH_KEY } from '@stores/auth.store';
import { PublicState, PUBLIC_KEY } from '@stores/public.store';
import { SettingsState, SETTINGS_KEY } from '@stores/settings.store';
import { UserState, USER_KEY } from '@stores/user.store';


export interface State {
  [SETTINGS_KEY]: SettingsState;
  [AUTH_KEY]: AuthState;
  [USER_KEY]: UserState;
  [APP_KEY]: AppState;
  [ACCT_KEY]: AcctState;
  [PUBLIC_KEY]: PublicState;
  [MENU_KEY]: MenuState;
  router: RouterReducerState;
}



export const reducers: ActionReducerMap<State> = {
  [SETTINGS_KEY]: settingsReducer,
  [AUTH_KEY]: authReducer,
  [USER_KEY]: userReducer,
  [APP_KEY]: appReducers,
  [ACCT_KEY]: acctReducers,
  [PUBLIC_KEY]: publicReducer,
  [MENU_KEY]: menuReducers,
  router: routerReducer
};
