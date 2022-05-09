import { User } from './user.model';

export interface UserEditModalResult extends Pick<User, 'roles'> {
  userId: string;
}
