import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import { UsersService } from '@services/users/users.service';
import { UsersActions } from './actions';
import { clientIdWithData, clientIdWithoudData } from '@store/shared';
import { User } from '@models/users/user.model';
import { Role } from '@models/users/role.model';
import { FoundUser } from '@models/users/found-user.model';
import { NotifyActions } from '@store/notify/actions';
import { TranslateService } from '@ngx-translate/core';
import { ServerError } from '@models/errors/server-error.model';

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
          catchError((error: ServerError) =>
            of(
              UsersActions.loadUsersFailure(error.message),
              UsersActions.showServerError({ error })
            )
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
          catchError((error: ServerError) =>
            of(
              UsersActions.loadRolesFailure(error.message),
              UsersActions.showServerError({ error })
            )
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
          map((user: FoundUser) =>
            UsersActions.signInFoundUser({
              user,
              signInData: { roles, ...rest },
            })
          ),
          catchError((error: ServerError) => {
            if (error.status === 404) {
              return of(UsersActions.signInUserSuccess({ roles, ...rest }));
            }
            return of(
              UsersActions.signInUserFailure(error.message),
              UsersActions.showServerError({ error })
            );
          })
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
      switchMap((action) => clientIdWithData(this.store, action.payload)),
      switchMap(({ clientId, data }) =>
        this.usersService.createUser(clientId, data).pipe(
          map((user: User) => UsersActions.createUserSuccess(user)),
          catchError((error: ServerError) =>
            of(
              UsersActions.createUserFailure(error.message),
              UsersActions.showServerError({ error })
            )
          )
        )
      )
    )
  );

  restoreUserRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.restoreUserRequest),
      switchMap((action) => clientIdWithData(this.store, action.payload)),
      switchMap(({ clientId, data: { userId, roles } }) =>
        this.usersService.restoreUser(clientId, userId, { roles }).pipe(
          map((user: User) => UsersActions.restoreUserSuccess(user)),
          catchError((error: ServerError) =>
            of(
              UsersActions.restoreUserFailure(error.message),
              UsersActions.showServerError({ error })
            )
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

  updateUserRolesRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.updateUserRolesRequest),
      switchMap((action) => clientIdWithData(this.store, action.payload)),
      switchMap(({ clientId, data: { userId, roles } }) =>
        this.usersService.updateUserRoles(clientId, userId, { roles }).pipe(
          map((user: User) => UsersActions.updateUserRolesSuccess(user)),
          catchError((error) =>
            of(
              UsersActions.updateUserRolesFailure(error.message),
              UsersActions.showServerError({ error })
            )
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
            catchError((error: ServerError) =>
              of(
                UsersActions.updateUserLockStateFailure(error.message),
                UsersActions.showServerError({ error })
              )
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
          title = 'notify.locked';
          message = 'components.admin.lockedSuccssMessage';
        } else {
          title = 'notify.unlocked';
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
          catchError((error: ServerError) =>
            of(
              UsersActions.deleteUserFailure(error.message),
              UsersActions.showServerError({ error })
            )
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

  showServerError$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.showServerError),
      map(({ error }) =>
        NotifyActions.serverErrorNotification({
          error,
          message: error.message,
          title: this.translateService.instant('errors.error'),
        })
      )
    )
  );
}
