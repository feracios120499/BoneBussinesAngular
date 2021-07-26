import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PublicService } from '@services/public.service';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as publicActions from '../actions/public.actions';

@Injectable({
    providedIn: 'root'
})
export class PublicEffects {
    constructor(private actions$: Actions, private publicService: PublicService) { }

    loadBanks$ = this.actions$.pipe(
        ofType(publicActions.loadBanks),
        switchMap(() =>
            this.publicService.getBanks().pipe(
                map(
                    banks => publicActions.loadBanksSuccess({ banks })
                ),
                catchError(
                    error => of(publicActions.loadBanksFailure({ error: error.error.Message }))
                )
            )
        )
    );

}
