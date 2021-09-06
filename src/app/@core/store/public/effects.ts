import { Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { PublicService } from '@services/public.service';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { PublicActions } from './actions';

@Injectable({
    providedIn: 'root'
})
export class PublicEffects {
    constructor(private actions$: Actions, private publicService: PublicService) { }

    loadBanks$ = this.actions$.pipe(
        ofType(PublicActions.loadBanks),
        switchMap(() =>
            this.publicService.getBanks().pipe(
                map(
                    banks => PublicActions.loadBanksSuccess({ banks })
                ),
                catchError(
                    error => of(PublicActions.loadBanksFailure({ error: error.error.Message }))
                )
            )
        )
    );

}
