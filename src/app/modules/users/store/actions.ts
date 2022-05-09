import { createAction, props } from '@ngrx/store';

import { createHTTPActions } from '@store/shared';
import { FoundUser } from '../models/found-user.model';
import { Role } from '../models/role.model';
import { UserCreateModalConfig } from '../models/user-create-modal-config.model';
import { UserEditModalConfig } from '../models/user-edit-modal-config.model';
import { UserNameForm } from '../models/user-name-form.model';
import { UserRolesForm } from '../models/user-roles-form.model';
import { User } from '../models/user.model';
import { USERS_KEY } from './store';

export namespace UsersActions {
  export const [loadUsersRequest, loadUsersSuccess, loadUsersFailure] = createHTTPActions<void, User[], string>(
    `[${USERS_KEY}] load users`
  );

  export const filterUsers = createAction(`[${USERS_KEY}] filter users`, props<{ term: string }>());

  export const resetUserFilter = createAction(`[${USERS_KEY}] reset user filter`);

  export const [loadRolesRequest, loadRolesSuccess, loadRolesFailure] = createHTTPActions<void, Role[], string>(
    `[${USERS_KEY}] load roles`
  );

  export const [signInUserRequest, signInUserSuccess, signInUserFailure] = createHTTPActions<
    UserRolesForm,
    UserRolesForm,
    string
  >(`[${USERS_KEY}] sign in user`);

  export const signInFoundUser = createAction(
    `[${USERS_KEY}] sign in found user`,
    props<{ user: FoundUser; signInData: UserRolesForm }>()
  );

  export const setFoundUser = createAction(`[${USERS_KEY}] set found user`, props<{ user: FoundUser }>());

  export const [createUserRequest, createUserSuccess, createUserFailure] = createHTTPActions<
    UserNameForm & UserRolesForm,
    User,
    string
  >(`[${USERS_KEY}] create user`);

  export const [restoreUserRequest, restoreUserSuccess, restoreUserFailure] = createHTTPActions<
    { userId: string; roles: string[] },
    User,
    string
  >(`[${USERS_KEY}] restore user`);

  export const [updateUserRolesRequest, updateUserRolesSuccess, updateUserRolesFailure] = createHTTPActions<
    { userId: string; roles: string[] },
    User,
    string
  >(`[${USERS_KEY}] update user roles`);

  export const [deleteUserRequest, deleteUserSuccess, deleteUserFailure] = createHTTPActions<string, void, string>(
    `[${USERS_KEY}] delete user`
  );

  export const [updateUserLockStateRequest, updateUserLockStateSuccess, updateUserLockStateFailure] = createHTTPActions<
    { userId: string; isLock: boolean },
    User,
    string
  >(`[${USERS_KEY}] update user lock state`);

  export const resetUserCreation = createAction(`[${USERS_KEY}] reset user creation`);

  export const showUserCreateModal = createAction(`[${USERS_KEY} show user creation modal]`);

  export const setUserCreateModal = createAction(
    `[${USERS_KEY}] set user creation modal`,
    props<{ config: UserCreateModalConfig }>()
  );

  export const showUserEditModal = createAction(
    `[${USERS_KEY} show user edition modal]`,
    props<{ editingUser: User }>()
  );

  export const setUserEditModal = createAction(
    `[${USERS_KEY}] set user edition modal`,
    props<{ config: UserEditModalConfig }>()
  );
}
