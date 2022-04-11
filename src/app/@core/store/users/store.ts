import { FoundUser } from '@models/users/found-user.model';
import { UserEditStep } from '@models/users/user-edit-step.enum';
import { UsersLoadings } from './models/users-loadings.enum';
import { User } from '@models/users/user.model';
import { Role } from '@modules/users/models/role.model';
import { UserSignInModel } from '@models/users/user-sign-in.model';

export const USERS_KEY = 'users';

export interface UsersState {
  users: User[];
  filterTerm: string;
  roles: Role[];
  currentEditStep: UserEditStep;
  userSignInData: UserSignInModel | null;
  foundUser: FoundUser | null;
  loadings: UsersLoadings[];
}

export const initialState: UsersState = {
  users: [],
  filterTerm: '',
  roles: [],
  currentEditStep: UserEditStep.one,
  userSignInData: null,
  foundUser: null,
  loadings: [],
};
