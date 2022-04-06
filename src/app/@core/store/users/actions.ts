import { createAction, props } from '@ngrx/store';

import { createHTTPActions } from '@store/shared';
import { User } from '@models/users/user.model';
import { Role } from '@modules/users/models/role.model';

export namespace UsersActions {
  export const [loadUsersRequest, loadUsersSuccess, loadUsersFailure] =
    createHTTPActions<void, User[], string>('[USERS] load users');

  export const filterUsers = createAction(
    '[USERS] filter users',
    props<{ term: string }>()
  );

  export const [loadRolesRequest, loadRolesSuccess, loadRolesFailure] =
    createHTTPActions<void, Role[], string>('[USERS] load roles');

  // FOR DEMO PURPOSE ONLY:
  export const createUser = createAction(
    '[USERS] create user',
    props<{ user: Pick<User, 'phoneNumber' | 'email' | 'roles'> }>()
  );
}
