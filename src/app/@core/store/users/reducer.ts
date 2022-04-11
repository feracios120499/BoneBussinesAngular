import { createReducer, on } from '@ngrx/store';
import { UsersActions } from './actions';
import { initialState } from './store';
import { UsersLoadings } from './models/users-loadings.enum';
import { UserEditStep } from '@models/users/user-edit-step.enum';

export const usersReducer = createReducer(
  initialState,
  on(UsersActions.loadUsersRequest, (state) => ({
    ...state,
    loadings: [...state.loadings, UsersLoadings.userList],
  })),
  on(UsersActions.loadUsersSuccess, UsersActions.loadUsersFailure, (state) => ({
    ...state,
    loadings: state.loadings.filter((p) => p !== UsersLoadings.userList),
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
    loadings: [...state.loadings, UsersLoadings.roleList],
  })),
  on(UsersActions.loadRolesSuccess, UsersActions.loadRolesFailure, (state) => ({
    ...state,
    loadings: state.loadings.filter((p) => p !== UsersLoadings.roleList),
  })),
  on(UsersActions.loadRolesSuccess, (state, action) => ({
    ...state,
    roles: action.payload,
  })),
  on(
    UsersActions.signInUserRequest,
    UsersActions.updateUserRolesRequest,
    (state) => ({
      ...state,
      loadings: [...state.loadings, UsersLoadings.rolesEdit],
    })
  ),
  on(
    UsersActions.signInUserSuccess,
    UsersActions.signInUserFailure,
    UsersActions.updateUserRolesSuccess,
    UsersActions.updateUserRolesFailure,
    (state) => ({
      ...state,
      loadings: state.loadings.filter((p) => p !== UsersLoadings.rolesEdit),
    })
  ),
  on(UsersActions.signInUserSuccess, (state, action) => ({
    ...state,
    userSignInData: action.payload,
    currentEditStep: UserEditStep.two,
  })),
  on(UsersActions.setFoundUser, (state, action) => ({
    ...state,
    foundUser: action.user,
  })),
  on(
    UsersActions.createUserRequest,
    UsersActions.restoreUserRequest,
    (state) => ({
      ...state,
      loadings: [...state.loadings, UsersLoadings.nameEdit],
    })
  ),
  on(
    UsersActions.createUserSuccess,
    UsersActions.createUserFailure,
    UsersActions.restoreUserSuccess,
    UsersActions.restoreUserFailure,
    (state) => ({
      ...state,
      loadings: state.loadings.filter((p) => p !== UsersLoadings.nameEdit),
    })
  ),
  on(UsersActions.updateUserLockStateRequest, (state) => ({
    ...state,
    loadings: [...state.loadings, UsersLoadings.lockStateEdit],
  })),
  on(
    UsersActions.updateUserLockStateSuccess,
    UsersActions.updateUserLockStateFailure,
    (state) => ({
      ...state,
      loadings: state.loadings.filter((p) => p !== UsersLoadings.lockStateEdit),
    })
  ),
  on(UsersActions.resetUserEdition, (state) => ({
    ...state,
    userSignInData: null,
    foundUser: null,
    currentEditStep: UserEditStep.one,
  }))
);
