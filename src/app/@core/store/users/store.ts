import { User } from '@models/users/user.model';
import { UsersLoadings } from './models/users-loadings.enum';

export const USERS_KEY = 'users';

export interface UsersState {
  users: User[];
  loadings: UsersLoadings[];
  filterTerm: string;
}

export const initialState: UsersState = {
  users: [],
  loadings: [],
  filterTerm: '',
};
