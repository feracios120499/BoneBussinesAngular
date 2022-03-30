import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import { UsersService } from '@services/users/users.service';
import { UsersActions } from './actions';
import { clientIdWithoudData } from '@store/shared';
import { User } from '@models/users/user.model';

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
}
