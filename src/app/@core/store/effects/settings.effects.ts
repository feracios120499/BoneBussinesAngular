import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { SettingsService } from '@services/settings.service';
import { map, switchMap, tap } from 'rxjs/operators';
import * as settingsActions from './../actions/settings.actions';
@Injectable()
export class SettingsEffects {

    constructor(private actions$: Actions, private settingsService: SettingsService) { }

    loadResources$ = createEffect(() =>
        this.actions$.pipe(
            ofType(settingsActions.loadResources),
            switchMap((action) =>
                this.settingsService.getResources().pipe(
                    map((resources) => settingsActions.setResources({ resources }))
                )
            )
        )
    );
}
