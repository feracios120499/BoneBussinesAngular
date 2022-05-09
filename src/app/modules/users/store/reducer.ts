import { createReducer, on } from '@ngrx/store';

import { UsersActions } from './actions';
import { initialState } from './store';
import { pushIfNotExist, removeItem } from '@store/shared';

export const usersReducer = createReducer(
  initialState,
  on(UsersActions.loadUsersRequest, (state) => ({
    ...state,
    loadings: [...pushIfNotExist(state.loadings, 'userList')],
  })),
  on(UsersActions.loadUsersSuccess, UsersActions.loadUsersFailure, (state) => ({
    ...state,
    loadings: [...removeItem(state.loadings, 'userList')],
  })),
  on(UsersActions.loadUsersSuccess, (state, action) => ({
    ...state,
    users: action.payload,
  })),
  on(UsersActions.filterUsers, (state, action) => ({
    ...state,
    filterTerm: action.term,
  })),
  on(UsersActions.resetUserFilter, (state) => ({
    ...state,
    filterTerm: '',
  })),
  on(UsersActions.loadRolesRequest, (state) => ({
    ...state,
    loadings: [...pushIfNotExist(state.loadings, 'roleList')],
  })),
  on(UsersActions.loadRolesSuccess, UsersActions.loadRolesFailure, (state) => ({
    ...state,
    loadings: [...removeItem(state.loadings, 'roleList')],
  })),
  on(UsersActions.loadRolesSuccess, (state, action) => ({
    ...state,
    roles: action.payload,
  })),
  on(UsersActions.updateUserRolesRequest, (state) => ({
    ...state,
    loadings: [...pushIfNotExist(state.loadings, 'userEdit')],
  })),
  on(UsersActions.updateUserRolesSuccess, UsersActions.updateUserRolesFailure, (state) => ({
    ...state,
    loadings: [...removeItem(state.loadings, 'userEdit')],
  })),
  on(UsersActions.signInUserSuccess, (state) => ({
    ...state,
    progress: 'create',
  })),
  on(UsersActions.setFoundUser, (state, action) => ({
    ...state,
    foundUser: action.user,
  })),
  on(UsersActions.signInUserRequest, UsersActions.createUserRequest, UsersActions.restoreUserRequest, (state) => ({
    ...state,
    loadings: [...pushIfNotExist(state.loadings, 'userCreate')],
  })),
  on(
    UsersActions.signInUserSuccess,
    UsersActions.signInUserFailure,
    UsersActions.createUserSuccess,
    UsersActions.createUserFailure,
    UsersActions.restoreUserSuccess,
    UsersActions.restoreUserFailure,
    (state) => ({
      ...state,
      loadings: [...removeItem(state.loadings, 'userCreate')],
    })
  ),
  on(UsersActions.updateUserLockStateRequest, (state) => ({
    ...state,
    loadings: [...pushIfNotExist(state.loadings, 'lockStateEdit')],
  })),
  on(UsersActions.updateUserLockStateSuccess, UsersActions.updateUserLockStateFailure, (state) => ({
    ...state,
    loadings: [...removeItem(state.loadings, 'lockStateEdit')],
  })),
  on(UsersActions.resetUserCreation, (state) => ({
    ...state,
    foundUser: null,
    progress: 'signIn',
  }))
);
