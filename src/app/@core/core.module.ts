import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AcctEffects } from '@effects/acct.effects';
import { AuthEffects } from '@effects/auth.effects';
import { NotifyEffects } from '@effects/notify.effects';
import { PublicEffects } from '@effects/public.effects';
import { RouteEffects } from '@effects/route.effects';
import { SettingsEffects } from '@effects/settings.effects';
import { UserEffects } from '@effects/user.effects';
import { EffectsModule } from '@ngrx/effects';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { ActionReducer, MetaReducer, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { localStorageSync } from 'ngrx-store-localstorage';
import { environment } from 'src/environments/environment';

import { reducers } from './store';

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
const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

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
      NotifyEffects
    ]),
    StoreRouterConnectingModule.forRoot(),
  ],
  declarations: [],
  exports: [StoreModule, StoreDevtoolsModule, EffectsModule]
})
export class CoreModule { }
