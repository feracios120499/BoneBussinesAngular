import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UsersState, USERS_KEY } from './store';
import { UsersLoadings } from './models/users-loadings.enum';

export namespace UsersSelectors {
  export const usersStore = createFeatureSelector<UsersState>(USERS_KEY);

  export const usersSelector = createSelector(
    usersStore,
    (state) => state.users
  );

  export const filterTerm = createSelector(
    usersStore,
    (state) => state.filterTerm
  );

  export const currentEditStep = createSelector(
    usersStore,
    (state) => state.currentEditStep
  );

  export const rolesSelector = createSelector(
    usersStore,
    (state) => state.roles
  );

  export const foundUser = createSelector(
    usersStore,
    (state) => state.foundUser
  );

  export const userSignInData = createSelector(
    usersStore,
    (state) => state.userSignInData
  );

  export const isLoadingUsers = createSelector(usersStore, (state) =>
    state.loadings.includes(UsersLoadings.userList)
  );

  export const isLoadingRoles = createSelector(usersStore, (state) =>
    state.loadings.includes(UsersLoadings.roleList)
  );

  export const isLoadingUsersOrRoles = createSelector(usersStore, (state) =>
    state.loadings.some(
      (p) => p === UsersLoadings.userList || p === UsersLoadings.roleList
    )
  );

  export const isLoadingRolesEdit = createSelector(usersStore, (state) =>
    state.loadings.includes(UsersLoadings.rolesEdit)
  );

  export const isLoadingNameEdit = createSelector(usersStore, (state) =>
    state.loadings.includes(UsersLoadings.nameEdit)
  );
}
