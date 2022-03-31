import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UsersState, USERS_KEY } from './store';
import { UsersLoadings } from './models/users-loadings.enum';

export namespace UsersSelectors {
  export const usersStore = createFeatureSelector<UsersState>(USERS_KEY);

  export const usersSelector = createSelector(
    usersStore,
    (state) => state.users
  );

  export const isLoadingUsers = createSelector(usersStore, (state) =>
    state.loadings.includes(UsersLoadings.list)
  );

  export const filterTerm = createSelector(
    usersStore,
    (state) => state.filterTerm
  );
}
