import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { currentClientIdSelector, currentCustomerSelector, profileSelector } from '@selectors/user.selectors';
import { NotificationsService } from '@services/notifications.service';
import { UserService } from '@services/user.service';
import { of } from 'rxjs';
import { catchError, delay, map, switchMap, withLatestFrom } from 'rxjs/operators';

import * as userActions from './../actions/user.actions';
import * as authActions from './../actions/auth.actions';
import { MenuService } from '@services/menu.service';

// import { EMPTY } from 'rxjs';
// import { map, mergeMap, catchError } from 'rxjs/operators';

// import all requried services or any dependencies

@Injectable()
export class UserEffects {
    constructor(
        private actions$: Actions,
        private store: Store,
        private userService: UserService,
        private notificationsService: NotificationsService,
        private menuService: MenuService) { }

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

    loadNotifications$ = createEffect(() =>
        this.actions$.pipe(
            ofType(userActions.loadNotifications),
            withLatestFrom(this.store.select(profileSelector)),
            switchMap(([action, profile]) =>
                this.notificationsService.getNotifications(profile?.UserId || '').pipe(
                    map((notifications) => userActions.setNotifications({ notifications }))
                ))
        ));

    loadProfileSuccess$ = createEffect(() =>
        this.actions$.pipe(
            ofType(userActions.loadProfileSuccess, authActions.authLoadProfileSuccess),
            withLatestFrom(this.store.select(currentClientIdSelector)),
            map(([action, currentClientId]) => {
                if (currentClientId === undefined) {
                    return userActions.setCurrentClientId({ clientId: action.profile.Customers[0].ClientId });
                }
                else {
                    return userActions.setCurrentClientId({ clientId: currentClientId });
                }
            })
        )
    );

    buildMenu$ = createEffect(() =>
        this.actions$.pipe(
            ofType(userActions.setCurrentClientId),
            withLatestFrom(this.store.select(currentCustomerSelector)),
            map(([action, currentCustomer]) => {
                const menu = this.menuService.getMenuForCustomer(currentCustomer!);
                return userActions.setMenu({ menu });
            })
        ));

    buildSubMenu$ = createEffect(() =>
        this.actions$.pipe(
            ofType(userActions.setMenu),
            map(() => {
                const menu = this.menuService.getSubMenu();
                return userActions.setSubMenu({ menu });
            })
        ));
}
