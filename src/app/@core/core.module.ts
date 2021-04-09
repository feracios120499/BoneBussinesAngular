import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthEffects } from '@effects/auth.effects';
import { EffectsModule } from '@ngrx/effects';
import { ActionReducer, MetaReducer, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { localStorageSync } from 'ngrx-store-localstorage';
import { environment } from 'src/environments/environment';
import { reducers } from './store';

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
    return localStorageSync({ keys: [{ settings: ['currentLanguage'] }], rehydrate: true })(reducer);
}
const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forRoot(reducers, {
            metaReducers
        }),
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
        EffectsModule.forRoot([AuthEffects])
    ],
    declarations: [],
    exports: [StoreModule, StoreDevtoolsModule, EffectsModule]
})
export class CoreModule {

}
