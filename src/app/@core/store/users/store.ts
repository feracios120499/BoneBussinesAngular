import { User } from '@models/users/user.model';
import { Role } from '@modules/users/models/role.model';
import { UsersLoadings } from './models/users-loadings.enum';

export const USERS_KEY = 'users';

export interface UsersState {
  users: User[];
  filterTerm: string;
  roles: Role[];
  loadings: UsersLoadings[];
}

export const initialState: UsersState = {
  users: [],
  roles: [],
  filterTerm: '',
  loadings: [],
};
