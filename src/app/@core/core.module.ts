import { logout } from '@actions/auth.actions';
import { selectCurrentClientId } from '@actions/user.actions';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AcctEffects } from '@effects/acct.effects';
import { AuthEffects } from '@effects/auth.effects';
import { MenuEffects } from '@effects/menu.effects';
import { NotifyEffects } from '@effects/notify.effects';
import { PublicEffects } from '@effects/public.effects';
import { RouteEffects } from '@effects/route.effects';
import { SettingsEffects } from '@effects/settings.effects';
import { UserEffects } from '@effects/user.effects';
import { EffectsModule } from '@ngrx/effects';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { ActionReducer, INITIAL_REDUCERS, MetaReducer, on, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AUTH_KEY } from '@stores/auth.store';
import { PUBLIC_KEY } from '@stores/public.store';
import { SETTINGS_KEY } from '@stores/settings.store';
import { USER_KEY } from '@stores/user.store';
import * as deepmerge from 'deepmerge';
import { localStorageSync } from 'ngrx-store-localstorage';
import { environment } from 'src/environments/environment';

import { reducers, State } from './store';

const INIT_ACTION = '@ngrx/store/init';
const saveStoresLogout = [SETTINGS_KEY, PUBLIC_KEY];
const saveStoresChangeCustomer = [...saveStoresLogout, USER_KEY, AUTH_KEY];
export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync(
    {
      keys: [
        { settings: ['currentLanguage', 'darkModeActive'] },
        { auth: ['token'] },
        { user: ['currentClientId'] }
      ],
      rehydrate: true
    })(reducer);
}

export function clearOnLogoutMetaReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    if (action.type === logout.type) {
      let saveState = {};
      saveStoresLogout.forEach((key) => saveState = deepmerge(saveState, { [key]: state[key] }));
      return reducer(saveState, action);
    }
    if (action.type === selectCurrentClientId.type) {
      console.log(state.auth);
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
    StoreDevtoolsModule.instrument({ maxAge: 100, logOnly: environment.production }),
    EffectsModule.forRoot([
      AuthEffects,
      RouteEffects,
      UserEffects,
      SettingsEffects,
      AcctEffects,
      PublicEffects,
      NotifyEffects,
      MenuEffects
    ]),
    StoreRouterConnectingModule.forRoot(),
  ],
  declarations: [],
  exports: [StoreModule, StoreDevtoolsModule, EffectsModule]
})
export class CoreModule { }
