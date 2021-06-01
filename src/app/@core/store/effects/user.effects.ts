import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { profileSelector } from '@selectors/user.selectors';
import { UserService } from '@services/user.service';
import { of } from 'rxjs';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';

import * as userActions from './../actions/user.actions';

// import { EMPTY } from 'rxjs';
// import { map, mergeMap, catchError } from 'rxjs/operators';

// import all requried services or any dependencies

@Injectable()
export class UserEffects {
    constructor(private actions$: Actions, private store: Store, private userService: UserService) { }

    checkProfile$ = createEffect(() =>
        this.actions$.pipe(
            ofType(userActions.checkProfile),
            withLatestFrom(this.store.select(profileSelector)),
            map(([action, profile]) => {
                if (profile !== undefined) {
                    return userActions.profileExist();
                }
                else {
                    return userActions.loadProfileRequest();
                }
            })
        )
    );

    loadProfileRequest$ = createEffect(() =>
        this.actions$.pipe(
            ofType(userActions.loadProfileRequest),
            switchMap((action) =>
                this.userService.getProfile().pipe(
                    map((profile) => userActions.loadProfileSuccess({ profile })),
                    catchError((error) => of(userActions.loadProfileFailure({ error: error.error.Message })))
                )
            )
        ));

}
