import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import {
  catchError,
  map,
  switchMap,
  tap,
  withLatestFrom,
} from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import { UsersService } from '@services/users/users.service';
import { UsersActions } from './actions';
import { clientIdWithData, clientIdWithoudData } from '@store/shared';
import { User } from '@models/users/user.model';
import { Role } from '@modules/users/models/role.model';
import { FoundUser } from '@models/users/found-user.model';
import { UserSignInError } from '@models/users/user-sign-in-error.model';
import { UserSignInErrorStatus } from '@models/users/user-sign-in-error-status.enum';
import { NotifyActions } from '@store/notify/actions';
import { TranslateService } from '@ngx-translate/core';
import { UsersSelectors } from './selectors';

@Injectable()
export class UsersEffects {
  constructor(
    private actions$: Actions,
    private store: Store,
    private usersService: UsersService,
    private translateService: TranslateService
  ) {}

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        UsersActions.loadUsersRequest,
        UsersActions.createUserSuccess,
        UsersActions.restoreUserSuccess,
        UsersActions.updateUserRolesSuccess,
        UsersActions.deleteUserSuccess,
        UsersActions.updateUserLockStateSuccess
      ),
      switchMap(() => clientIdWithoudData(this.store)),
      switchMap((clientId: string) =>
        this.usersService.getUsers(clientId).pipe(
          map((users: User[]) => UsersActions.loadUsersSuccess(users)),
          catchError((error) =>
            of(UsersActions.loadUsersFailure(error.error.Message))
          )
        )
      )
    )
  );

  loadRoles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.loadUsersSuccess),
      switchMap(() => clientIdWithoudData(this.store)),
      switchMap((clientId: string) =>
        this.usersService.getRoles(clientId).pipe(
          map((roles: Role[]) => UsersActions.loadRolesSuccess(roles)),
          catchError((error) =>
            of(UsersActions.loadRolesFailure(error.error.Message))
          )
        )
      )
    )
  );

  signInUserRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.signInUserRequest),
      switchMap((action) => clientIdWithData(this.store, action.payload)),
      switchMap(({ clientId, data: { roles, ...rest } }) =>
        this.usersService.findUser(clientId, { ...rest }).pipe(
          map((res: FoundUser | UserSignInError) => {
            if (res.hasOwnProperty('errorMessage')) {
              const errorRes = res as UserSignInError;
              if (errorRes.statusCode === UserSignInErrorStatus.notFound) {
                return UsersActions.signInUserSuccess({ roles, ...rest });
              } else {
                return UsersActions.signInUserFailure(errorRes.errorMessage);
              }
            } else {
              return UsersActions.signInFoundUser({
                signInData: { roles, ...rest },
                user: res as FoundUser,
              });
            }
          }),
          catchError((error) =>
            of(UsersActions.signInUserFailure(error.error.Message))
          )
        )
      )
    )
  );

  setFoundUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.signInFoundUser),
      tap(({ user }) =>
        this.store.dispatch(UsersActions.setFoundUser({ user }))
      ),
      map(({ signInData }) => UsersActions.signInUserSuccess(signInData))
    )
  );

  createUserRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.createUserRequest),
      withLatestFrom(this.store.select(UsersSelectors.userSignInData)),
      switchMap(([{ payload }, signInData]) =>
        clientIdWithData(this.store, { ...payload, ...signInData! })
      ),
      switchMap(({ clientId, data }) =>
        this.usersService.createUser(clientId, data).pipe(
          tap(console.log),
          map((user: User) => UsersActions.createUserSuccess(user)),
          catchError((error) =>
            of(UsersActions.createUserFailure(error.error.Message))
          )
        )
      )
    )
  );

  restoreUserRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.restoreUserRequest),
      withLatestFrom(this.store.select(UsersSelectors.userSignInData)),
      switchMap(([{ payload: userId }, signInData]) =>
        clientIdWithData(this.store, { userId, roles: signInData!.roles })
      ),
      switchMap(({ clientId, data: { userId, roles } }) =>
        this.usersService.restoreUser(clientId, userId, { roles }).pipe(
          tap(console.log),
          map((res: User | UserSignInError) => {
            const errorRes = res as UserSignInError;
            if (errorRes.hasOwnProperty('errorMessage')) {
              return UsersActions.restoreUserFailure(errorRes.errorMessage);
            } else {
              return UsersActions.restoreUserSuccess(res as User);
            }
          }),
          catchError((error) =>
            of(UsersActions.restoreUserFailure(error.error.Message))
          )
        )
      )
    )
  );

  newUserSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.createUserSuccess, UsersActions.restoreUserSuccess),
      map(() =>
        NotifyActions.successNotification({
          title: this.translateService.instant('components.admin.newUser'),
          message: this.translateService.instant(
            'components.admin.newUserIsAdded'
          ),
        })
      )
    )
  );

  newUserError$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.signInUserFailure, UsersActions.restoreUserFailure),
      map((action) =>
        NotifyActions.errorNotification({
          message: action.payload,
          title: this.translateService.instant('errors.error'),
        })
      )
    )
  );

  updateUserRolesRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.updateUserRolesRequest),
      switchMap((action) => clientIdWithData(this.store, action.payload)),
      switchMap(({ clientId, data: { userId, roles } }) =>
        this.usersService.updateUserRoles(clientId, userId, { roles }).pipe(
          map((user: User) => UsersActions.updateUserRolesSuccess(user)),
          catchError((error) =>
            of(UsersActions.updateUserRolesFailure(error.error.Message))
          )
        )
      )
    )
  );

  updateUserRolesSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.updateUserRolesSuccess),
      map(() =>
        NotifyActions.successNotification({
          title: this.translateService.instant('shared.success'),
          message: this.translateService.instant(
            'components.admin.infoUpdatedSuccs'
          ),
        })
      )
    )
  );

  updateUserLockStateRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.updateUserLockStateRequest),
      switchMap((action) => clientIdWithData(this.store, action.payload)),
      switchMap(({ clientId, data: { userId, isLock } }) =>
        this.usersService
          .updateUserLockState(clientId, userId, { isLock })
          .pipe(
            map((user: User) => UsersActions.updateUserLockStateSuccess(user)),
            catchError((error) =>
              of(UsersActions.updateUserLockStateFailure(error.error.Message))
            )
          )
      )
    )
  );

  updateUserLockStateSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.updateUserLockStateSuccess),
      map(({ payload: { isDisable } }) => {
        let title: string;
        let message: string;
        if (isDisable) {
          title = 'components.admin.locked';
          message = 'components.admin.lockedSuccssMessage';
        } else {
          title = 'components.admin.unlocked';
          message = 'components.admin.unlockedSuccess';
        }
        return NotifyActions.successNotification({
          title: this.translateService.instant(title),
          message: this.translateService.instant(message),
        });
      })
    )
  );

  deleteUserRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.deleteUserRequest),
      switchMap((action) => clientIdWithData(this.store, action.payload)),
      switchMap(({ clientId, data: userId }) =>
        this.usersService.deleteUser(clientId, userId).pipe(
          map(() => UsersActions.deleteUserSuccess()),
          catchError((error) =>
            of(UsersActions.deleteUserFailure(error.error.Message))
          )
        )
      )
    )
  );

  deleteUserSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.deleteUserSuccess),
      map(() =>
        NotifyActions.successNotification({
          title: this.translateService.instant('notify.deleted'),
          message: this.translateService.instant(
            'components.admin.userDeleted'
          ),
        })
      )
    )
  );
}
