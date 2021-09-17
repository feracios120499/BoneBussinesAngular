import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PublicService } from '@services/public.service';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { PublicActions } from './actions';

@Injectable({
    providedIn: 'root'
})
export class PublicEffects {
    constructor(private actions$: Actions, private publicService: PublicService) { }

    loadBanks$ = createEffect(() => this.actions$.pipe(
        ofType(PublicActions.loadBanksRequest),
        switchMap(() =>
            this.publicService.getBanks().pipe(
                map(banks => PublicActions.loadBanksSuccess(banks)),
                catchError(error => of(PublicActions.loadBanksFailure(error.error.Message)))
            )
        )));

    loadResources$ = createEffect(() =>
        this.actions$.pipe(
            ofType(PublicActions.loadResourcesRequest),
            switchMap(_ =>
                this.publicService.getResources().pipe(
                    map(resources => PublicActions.loadResourcesSuccess(resources)),
                    catchError(error => of(PublicActions.loadResourcesFailure(error.error.Message)))
                )
            )));

}
