import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { ActionReducer, MetaReducer, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from '@store';
import { AcctEffects } from '@store/acct/effects';
import { AuthActions } from '@store/auth/actions';
import { AuthEffects } from '@store/auth/effects';
import { AUTH_KEY } from '@store/auth/store';
import { MenuEffects } from '@store/menu/effects';
import { NotifyEffects } from '@store/notify/effects';
import { PublicEffects } from '@store/public/effects';
import { PUBLIC_KEY } from '@store/public/store';
import { RouteEffects } from '@store/route/effects';
import { SettingsEffects } from '@store/settings/effects';
import { SETTINGS_KEY } from '@store/settings/store';
import { SharedEffects } from '@store/shared/effects';
import { UserActions } from '@store/user/actions';
import { UserEffects } from '@store/user/effects';
import { USER_KEY } from '@store/user/store';
import deepmerge from 'deepmerge';
import { Keys, localStorageSync } from 'ngrx-store-localstorage';
import { environment } from 'src/environments/environment';

const saveStoresLogout = [SETTINGS_KEY, PUBLIC_KEY];
const saveStoresChangeCustomer = [...saveStoresLogout, USER_KEY, AUTH_KEY];
const keys: Keys = [
  { settings: ['currentLanguage', 'darkModeActive'] },
  { auth: ['token'] },
  { user: ['currentClientId'] }
];
export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync(
    {
      keys,
      rehydrate: true
    })(reducer);
}

export function clearOnLogoutMetaReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    if (action.type === AuthActions.logout.type) {
      let saveState = {};
      saveStoresLogout.forEach((key) => saveState = deepmerge(saveState, { [key]: state[key] }));
      return reducer(saveState, action);
    }
    if (action.type === UserActions.selectCurrentClientId.type) {
      let saveState = {};
      saveStoresChangeCustomer.forEach((key) => saveState = deepmerge(saveState, { [key]: state[key] }));
      return reducer(saveState, action);
    }
    return reducer(state, action);
  };
}



const metaReducers: Array<MetaReducer<any, any>> = [clearOnLogoutMetaReducer, localStorageSyncReducer];

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    StoreDevtoolsModule.instrument({ maxAge: 100, logOnly: environment.production, serialize: true }),
    EffectsModule.forRoot([
      AuthEffects,
      RouteEffects,
      UserEffects,
      SettingsEffects,
      AcctEffects,
      PublicEffects,
      NotifyEffects,
      MenuEffects,
      SharedEffects
    ]),
    StoreRouterConnectingModule.forRoot(),
  ],
  declarations: [],
  exports: [StoreModule, StoreDevtoolsModule, EffectsModule]
})
export class CoreModule { }
