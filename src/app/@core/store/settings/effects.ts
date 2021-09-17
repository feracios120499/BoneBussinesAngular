import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { SettingsService } from '@services/settings.service';
import { AppActions } from '@store/app/actions';
import { map, tap, withLatestFrom } from 'rxjs/operators';

import { SettingsActions } from './actions';
import { SettingsSelectors } from './selectors';

const DARK_MODE_CLASS = 'dark-mode';
@Injectable()
export class SettingsEffects {

    constructor(private actions$: Actions, private store: Store) { }


    appStartDarkMode$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AppActions.start),
            withLatestFrom(this.store.select(SettingsSelectors.darkMode)),
            map(([_, darkMode]) => SettingsActions.setDarkMode({ isActive: darkMode }))
        ));

    setDarkMode$ = createEffect(() =>
        this.actions$.pipe(
            ofType(SettingsActions.setDarkMode),
            tap(action => {
                if (action.isActive) {
                    document.body.classList.add(DARK_MODE_CLASS);
                }
                else {
                    document.body.classList.remove(DARK_MODE_CLASS);
                }
            })
        ),
        { dispatch: false });
}
