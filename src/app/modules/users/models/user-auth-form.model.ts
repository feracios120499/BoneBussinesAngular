import { User } from '@models/users/user.model';

export interface UserAuthForm
  extends Pick<User, 'phoneNumber' | 'email' | 'roles'> {}
