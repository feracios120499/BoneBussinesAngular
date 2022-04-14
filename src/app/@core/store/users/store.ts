import { FoundUser } from '@models/users/found-user.model';
import { UsersLoading } from './models/users-loading.type';
import { User } from '@models/users/user.model';
import { Role } from '@models/users/role.model';
import { UserCreateProgress } from '@b1-types/users/user-create-progress.type';

export const USERS_KEY = 'users';

export interface UsersState {
  users: User[];
  filterTerm: string;
  roles: Role[];
  progress: UserCreateProgress;
  foundUser: FoundUser | null;
  loadings: UsersLoading[];
}

export const initialState: UsersState = {
  users: [],
  filterTerm: '',
  roles: [],
  progress: 'signIn',
  foundUser: null,
  loadings: [],
};
