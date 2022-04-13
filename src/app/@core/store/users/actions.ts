import { createAction, props } from '@ngrx/store';

import { createHTTPActions } from '@store/shared';
import { Role } from '@models/users/role.model';
import { User } from '@models/users/user.model';
import { FoundUser } from '@models/users/found-user.model';
import { UserNameForm } from '@models/users/user-name-form.model';
import { UserRolesForm } from '@models/users/user-roles-form.model';
import { USERS_KEY } from './store';

export namespace UsersActions {
  export const [loadUsersRequest, loadUsersSuccess, loadUsersFailure] =
    createHTTPActions<void, User[], string>(`[${USERS_KEY}] load users`);

  export const filterUsers = createAction(
    `[${USERS_KEY}] filter users`,
    props<{ term: string }>()
  );

  export const [loadRolesRequest, loadRolesSuccess, loadRolesFailure] =
    createHTTPActions<void, Role[], string>(`[${USERS_KEY}] load roles`);

  export const [signInUserRequest, signInUserSuccess, signInUserFailure] =
    createHTTPActions<UserRolesForm, UserRolesForm, string>(
      `[${USERS_KEY}] sign in user`
    );

  export const signInFoundUser = createAction(
    `[${USERS_KEY}] sign in found user`,
    props<{ user: FoundUser; signInData: UserRolesForm }>()
  );

  export const setFoundUser = createAction(
    `[${USERS_KEY}] set found user`,
    props<{ user: FoundUser }>()
  );

  export const [createUserRequest, createUserSuccess, createUserFailure] =
    createHTTPActions<UserNameForm & UserRolesForm, User, string>(
      `[${USERS_KEY}] create user`
    );

  export const [restoreUserRequest, restoreUserSuccess, restoreUserFailure] =
    createHTTPActions<{ userId: string; roles: string[] }, User, string>(
      `[${USERS_KEY}] restore user`
    );

  export const [
    updateUserRolesRequest,
    updateUserRolesSuccess,
    updateUserRolesFailure,
  ] = createHTTPActions<{ userId: string; roles: string[] }, User, string>(
    `[${USERS_KEY}] update user roles`
  );

  export const [deleteUserRequest, deleteUserSuccess, deleteUserFailure] =
    createHTTPActions<string, void, string>(`[${USERS_KEY}] delete user`);

  export const [
    updateUserLockStateRequest,
    updateUserLockStateSuccess,
    updateUserLockStateFailure,
  ] = createHTTPActions<{ userId: string; isLock: boolean }, User, string>(
    `[${USERS_KEY}] update user lock state`
  );

  export const resetUserCreation = createAction(
    `[${USERS_KEY}] reset user creation`
  );
}
