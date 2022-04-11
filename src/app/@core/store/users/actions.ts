import { createAction, props } from '@ngrx/store';

import { createHTTPActions } from '@store/shared';
import { Role } from '@modules/users/models/role.model';
import { User } from '@models/users/user.model';
import { FoundUser } from '@models/users/found-user.model';
import { UserSignInModel } from '@models/users/user-sign-in.model';
import { UserNameModel } from '@models/users/user-name.model';

export namespace UsersActions {
  export const [loadUsersRequest, loadUsersSuccess, loadUsersFailure] =
    createHTTPActions<void, User[], string>('[USERS] load users');

  export const filterUsers = createAction(
    '[USERS] filter users',
    props<{ term: string }>()
  );

  export const [loadRolesRequest, loadRolesSuccess, loadRolesFailure] =
    createHTTPActions<void, Role[], string>('[USERS] load roles');

  export const [signInUserRequest, signInUserSuccess, signInUserFailure] =
    createHTTPActions<UserSignInModel, UserSignInModel, string>(
      '[USERS] sign in user'
    );

  export const signInFoundUser = createAction(
    '[USERS] sign in found user',
    props<{ user: FoundUser; signInData: UserSignInModel }>()
  );

  export const setFoundUser = createAction(
    '[USERS] set found user',
    props<{ user: FoundUser }>()
  );

  export const [createUserRequest, createUserSuccess, createUserFailure] =
    createHTTPActions<UserNameModel, User, string>('[USERS] create user');

  export const [restoreUserRequest, restoreUserSuccess, restoreUserFailure] =
    createHTTPActions<string, User, string>('[USERS] restore user');

  export const [
    updateUserRolesRequest,
    updateUserRolesSuccess,
    updateUserRolesFailure,
  ] = createHTTPActions<{ userId: string; roles: string[] }, User, string>(
    '[USERS] update user roles'
  );

  export const [deleteUserRequest, deleteUserSuccess, deleteUserFailure] =
    createHTTPActions<string, void, string>('[USERS] delete user');

  export const [
    updateUserLockStateRequest,
    updateUserLockStateSuccess,
    updateUserLockStateFailure,
  ] = createHTTPActions<{ userId: string; isLock: boolean }, User, string>(
    '[USERS] update user lock state'
  );

  export const resetUserEdition = createAction('[USERS] reset user edition');
}
