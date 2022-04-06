import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import { UsersService } from '@services/users/users.service';
import { UsersActions } from './actions';
import { clientIdWithoudData } from '@store/shared';
import { User } from '@models/users/user.model';
import { Role } from '@modules/users/models/role.model';

@Injectable()
export class UsersEffects {
  constructor(
    private actions$: Actions,
    private store: Store,
    private usersService: UsersService
  ) {}

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.loadUsersRequest),
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
          tap(console.log),
          catchError((error) =>
            of(UsersActions.loadRolesFailure(error.error.Message))
          )
        )
      )
    )
  );
}
