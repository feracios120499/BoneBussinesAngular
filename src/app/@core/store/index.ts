import { acctReducer } from '@modules/accounts/store/reducer';
import { AcctState, ACCT_KEY } from '@modules/accounts/store/store';
import { authReducer } from '@modules/auth/store/reducer';
import { AuthState, AUTH_KEY } from '@modules/auth/store/store';
import { correspondentsReducer } from '@modules/correspondents/store/reducer';
import { CorrespondentsState, CORRESPONDENTS_KEY } from '@modules/correspondents/store/store';
import { usersReducer } from '@modules/users/store/reducer';
import { UsersState, USERS_KEY } from '@modules/users/store/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';
import { appReducers } from '@store/app/reducer';
import { APP_KEY, AppState } from '@store/app/store';
import { menuReducers } from '@store/menu/reducer';
import { MENU_KEY, MenuState } from '@store/menu/store';
import { publicReducer } from '@store/public/reducer';
import { PUBLIC_KEY, PublicState } from '@store/public/store';
import { settingsReducer } from '@store/settings/reducer';
import { SETTINGS_KEY, SettingsState } from '@store/settings/store';
import { userReducer } from '@store/user/reducer';
import { USER_KEY, UserState } from '@store/user/store';

import { sharedReducer } from './shared/reducer';
import { SHARED_KEY, SharedState } from './shared/store';
import { supDocReducer } from './sup-documents/reducer';
import { SupDocumentsState, SUP_DOC_KEY } from './sup-documents/store';

export interface State {
  [SETTINGS_KEY]: SettingsState;
  [AUTH_KEY]: AuthState;
  [USER_KEY]: UserState;
  [APP_KEY]: AppState;
  [ACCT_KEY]: AcctState;
  [PUBLIC_KEY]: PublicState;
  [MENU_KEY]: MenuState;
  [SHARED_KEY]: SharedState;
  [USERS_KEY]: UsersState;
  [CORRESPONDENTS_KEY]: CorrespondentsState;
  [SUP_DOC_KEY]: SupDocumentsState;
  router: RouterReducerState;
  [key: string]: any;
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
  [USERS_KEY]: usersReducer,
  [CORRESPONDENTS_KEY]: correspondentsReducer,
  [SUP_DOC_KEY]: supDocReducer,
  router: routerReducer,
};
