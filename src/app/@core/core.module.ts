import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AcctEffects } from '@modules/accounts/store/effects';
import { AuthActions } from '@modules/auth/store/actions';
import { AuthEffects } from '@modules/auth/store/effects';
import { AUTH_KEY } from '@modules/auth/store/store';
import { CorrespondentsEffects } from '@modules/correspondents/store/effects';
import { UsersEffects } from '@modules/users/store/effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { ActionReducer, MetaReducer, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from '@store';
import { AppActions } from '@store/app/actions';
import { APP_KEY } from '@store/app/store';
import { MenuEffects } from '@store/menu/effects';
import { NotifyEffects } from '@store/notify/effects';
import { PublicEffects } from '@store/public/effects';
import { PUBLIC_KEY } from '@store/public/store';
import { RouteEffects } from '@store/route/effects';
import { SettingsEffects } from '@store/settings/effects';
import { SETTINGS_KEY } from '@store/settings/store';
import { SharedEffects } from '@store/shared/effects';
import { SupDocumentsEffects } from '@store/sup-documents/effects';
import { UserActions } from '@store/user/actions';
import { UserEffects } from '@store/user/effects';
import { USER_KEY } from '@store/user/store';
import deepmerge from 'deepmerge';
import { Keys, localStorageSync } from 'ngrx-store-localstorage';
import { environment } from 'src/environments/environment';

const saveStoresLogout = [SETTINGS_KEY, PUBLIC_KEY, USER_KEY, APP_KEY];
const saveStoresChangeCustomer = [...saveStoresLogout, AUTH_KEY];
const keys: Keys = [
  { settings: ['currentLanguage', 'darkModeActive'] },
  { auth: ['token', 'userKey'] },
  { user: ['currentClientId'] },
  { app: ['isDemo'] },
];
export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({
    keys,
    rehydrate: true,
  })(reducer);
}

export function clearOnLogoutMetaReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    if (action.type === AuthActions.logout.type) {
      return reducer(saveState(saveStoresLogout), action);
    }
    if (action.type === UserActions.selectCurrentClientId.type) {
      return reducer(saveState(saveStoresChangeCustomer), action);
    }
    if (action.type == AppActions.removeStore.type) {
      const storeKey = (action as any).storeKey;
      return reducer(saveState(Object.keys(state).filter((p) => p != storeKey)), action);
    }
    return reducer(state, action);

    function saveState(stateKeys: string[]): Object {
      let saveState = {};
      stateKeys.forEach((key) => (saveState = deepmerge(saveState, { [key]: state[key] })));
      return saveState;
    }
  };
}

const metaReducers: Array<MetaReducer<any, any>> = [clearOnLogoutMetaReducer, localStorageSyncReducer];

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 100,
      logOnly: environment.production,
      serialize: true,
    }),
    EffectsModule.forRoot([
      AuthEffects,
      RouteEffects,
      UserEffects,
      SettingsEffects,
      AcctEffects,
      PublicEffects,
      NotifyEffects,
      MenuEffects,
      SharedEffects,
      UsersEffects,
      CorrespondentsEffects,
      SupDocumentsEffects
    ]),
    StoreRouterConnectingModule.forRoot(),
  ],
  declarations: [],
  exports: [StoreModule, StoreDevtoolsModule, EffectsModule],
})
export class CoreModule {}
