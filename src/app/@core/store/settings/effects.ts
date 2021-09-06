import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { SettingsService } from '@services/settings.service';
import { map, switchMap } from 'rxjs/operators';

import { SettingsActions } from './actions';

@Injectable()
export class SettingsEffects {

    constructor(private actions$: Actions, private settingsService: SettingsService) { }

    loadResources$ = createEffect(() =>
        this.actions$.pipe(
            ofType(SettingsActions.loadResources),
            switchMap((action) =>
                this.settingsService.getResources().pipe(
                    map((resources) => SettingsActions.setResources({ resources }))
                )
            )
        )
    );
}
