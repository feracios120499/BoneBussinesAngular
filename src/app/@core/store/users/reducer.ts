import { createReducer, on } from '@ngrx/store';
import { UsersActions } from './actions';
import { initialState } from './store';
import { UsersLoadings } from './models/users-loadings.enum';

export const usersReducer = createReducer(
  initialState,
  on(UsersActions.loadUsersRequest, (state) => ({
    ...state,
    loadings: [...state.loadings, UsersLoadings.list],
  })),
  on(UsersActions.loadUsersSuccess, UsersActions.loadUsersFailure, (state) => ({
    ...state,
    loadings: state.loadings.filter((p) => p !== UsersLoadings.list),
  })),
  on(UsersActions.loadUsersSuccess, (state, action) => ({
    ...state,
    users: action.payload,
  })),
  on(UsersActions.filterUsers, (state, action) => ({
    ...state,
    filterTerm: action.term,
  })),
  on(UsersActions.loadRolesRequest, (state) => ({
    ...state,
    loadings: [...state.loadings, UsersLoadings.roles],
  })),
  on(UsersActions.loadRolesSuccess, UsersActions.loadRolesFailure, (state) => ({
    ...state,
    loadings: state.loadings.filter((p) => p !== UsersLoadings.roles),
  })),
  on(UsersActions.loadRolesSuccess, (state, action) => ({
    ...state,
    roles: action.payload,
  }))
);
