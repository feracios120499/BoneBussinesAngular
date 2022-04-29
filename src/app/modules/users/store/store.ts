import { UserCreateProgress } from '@b1-types/users/user-create-progress.type';
import { FoundUser } from '../models/found-user.model';
import { Role } from '../models/role.model';
import { User } from '../models/user.model';
import { UsersLoading } from '../models/users-loading.type';

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
