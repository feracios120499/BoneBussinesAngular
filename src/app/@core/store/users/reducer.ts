import { createReducer, on } from '@ngrx/store';
import { UsersActions } from './actions';
import { initialState } from './store';

export const usersReducer = createReducer(
  initialState,
  on(UsersActions.loadUsersRequest, (state) => ({ ...state, isLoading: true })),
  on(UsersActions.loadUsersSuccess, UsersActions.loadUsersFailure, (state) => ({
    ...state,
    isLoading: false,
  })),
  on(UsersActions.loadUsersSuccess, (state, action) => ({
    ...state,
    users: action.payload,
  })),
  on(UsersActions.filterUsers, (state, action) => ({
    ...state,
    filterTerm: action.term,
  }))
);
