import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UsersState, USERS_KEY } from './store';

export namespace UsersSelectors {
  export const usersStore = createFeatureSelector<UsersState>(USERS_KEY);

  export const userList = createSelector(usersStore, (state) => state.users);

  export const filterTerm = createSelector(usersStore, (state) => state.filterTerm);

  export const roleList = createSelector(usersStore, (state) => state.roles);

  export const foundUser = createSelector(usersStore, (state) => state.foundUser);

  export const progress = createSelector(usersStore, (state) => state.progress);

  export const isInitialLoadingUsers = createSelector(
    usersStore,
    (state) => !state.users.length && state.loadings.includes('userList')
  );

  export const isLoadingUsers = createSelector(usersStore, (state) => state.loadings.includes('userList'));

  export const isLoadingRoles = createSelector(usersStore, (state) => state.loadings.includes('roleList'));

  export const isLoadingList = createSelector(usersStore, (state) =>
    state.loadings.some((p) => p === 'userList' || p === 'roleList')
  );

  export const isLoadingUserCreate = createSelector(usersStore, (state) => state.loadings.includes('userCreate'));

  export const isLoadingUserEdit = createSelector(usersStore, (state) => state.loadings.includes('userEdit'));
}
