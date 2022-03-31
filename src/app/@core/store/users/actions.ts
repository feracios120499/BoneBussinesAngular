import { createAction, props } from '@ngrx/store';

import { createHTTPActions } from '@store/shared';
import { User } from '@models/users/user.model';

export namespace UsersActions {
  export const [loadUsersRequest, loadUsersSuccess, loadUsersFailure] =
    createHTTPActions<void, User[], string>('[USERS] load users');

  export const filterUsers = createAction(
    '[USERS] filter users',
    props<{ term: string }>()
  );
}
