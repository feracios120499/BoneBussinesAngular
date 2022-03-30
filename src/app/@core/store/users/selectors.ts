import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UsersState, USERS_KEY } from './store';

export namespace UsersSelectors {
  export const usersStore = createFeatureSelector<UsersState>(USERS_KEY);

  export const usersSelector = createSelector(
    usersStore,
    (state) => state.users
  );

  export const isLoading = createSelector(
    usersStore,
    (state) => state.isLoading
  );

  export const filterTerm = createSelector(
    usersStore,
    (state) => state.filterTerm
  );
}
