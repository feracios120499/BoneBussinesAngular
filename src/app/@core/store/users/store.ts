import { User } from '@models/users/user.model';

export const USERS_KEY = 'users';

export interface UsersState {
  users: User[];
  isLoading: boolean;
  filterTerm: string;
}

export const initialState: UsersState = {
  users: [],
  isLoading: false,
  filterTerm: '',
};
